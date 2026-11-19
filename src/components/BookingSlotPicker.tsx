import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Globe, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BOOKING, CONTACT_EMAIL, HTTP_STATUS } from '@/lib/booking';

const DAY_KEY_LOCALE = 'en-CA';
const SKELETON_DAYS = 4;
const SKELETON_TIMES = 8;
const JSON_HEADERS = { 'Content-Type': 'application/json' };

const LEGEND = 'mb-2 text-[11px] font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500';
const HEADING = 'text-base sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white focus:outline-none';
const CHIP = 'inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg border px-3 text-xs font-medium tabular-nums transition-colors select-none peer-focus-visible:ring-2 peer-focus-visible:ring-gray-900 dark:peer-focus-visible:ring-white peer-focus-visible:ring-offset-1';
const CHIP_ON = 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white';
const CHIP_OFF = 'border-gray-200 text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500';
const LINK = 'inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white underline-offset-4 hover:underline';

const COPY = {
  PICK_HEADING: (minutes: number) => `Pick a time for a ${minutes}-minute call.`,
  PICK_INTRO: (name: string) => `Thanks, ${name}, message received. Grab a slot now, or skip it and I'll reply by email.`,
  THANKS: (name: string) => `Thanks, ${name}.`,
  REPLY: "Message received. I'll get back to you soon.",
  LOADING: 'Loading available times…',
  DAY: 'Day',
  TIME: 'Time',
  TIMEZONE: (label: string) => `Times in ${label}`,
  BOOK: 'Book call',
  BOOKING: 'Booking…',
  SKIP: 'Skip for now',
  BOOKING_AS: (name: string, email: string) => `Invite goes to ${name} · ${email}`,
  BOOKED_HEADING: 'See you on the call.',
  BOOKED: (when: string, email: string) => `You're booked for ${when}. A Google Calendar invite with the Meet link is on its way to ${email}.`,
  MEET: 'Join Google Meet',
  FALLBACK_CTA: 'Email me to set a time',
} as const;

type Phase =
  | { kind: 'loading' }
  | { kind: 'ready' }
  | { kind: 'unavailable' }
  | { kind: 'skipped' }
  | { kind: 'booked'; start: string; meetLink: string | null };

interface BookingSlotPickerProps {
  name: string;
  email: string;
  notes: string;
}

const visitorTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone || BOOKING.HOST_TIMEZONE;

const timeZoneLabel = (timeZone: string) =>
  new Intl.DateTimeFormat(undefined, { timeZone, timeZoneName: 'long' })
    .formatToParts(new Date())
    .find((part) => part.type === 'timeZoneName')?.value ?? timeZone;

export default function BookingSlotPicker({ name, email, notes }: BookingSlotPickerProps) {
  const [phase, setPhase] = useState<Phase>({ kind: 'loading' });
  const [slots, setSlots] = useState<string[]>([]);
  const [slotMinutes, setSlotMinutes] = useState<number>(BOOKING.DEFAULT_SLOT_MINUTES);
  const [dayKey, setDayKey] = useState<string | null>(null);
  const [start, setStart] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [timeZone] = useState(visitorTimeZone);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const activeRef = useRef(true);

  const load = useCallback(async () => {
    try {
      const res = await fetch(BOOKING.SLOTS_URL, { cache: 'no-store' });
      const json = await res.json().catch(() => null);
      const list: string[] = res.ok && Array.isArray(json?.data?.slots) ? json.data.slots : [];
      if (!activeRef.current) return;
      if (list.length === 0) {
        setPhase({ kind: 'unavailable' });
        return;
      }
      if (typeof json?.data?.slotMinutes === 'number') setSlotMinutes(json.data.slotMinutes);
      setSlots(list);
      setPhase({ kind: 'ready' });
    } catch {
      if (activeRef.current) setPhase({ kind: 'unavailable' });
    }
  }, []);

  useEffect(() => {
    activeRef.current = true;
    load();
    return () => {
      activeRef.current = false;
    };
  }, [load]);

  useEffect(() => {
    if (phase.kind !== 'ready') headingRef.current?.focus();
  }, [phase.kind]);

  const formats = useMemo(() => ({
    key: new Intl.DateTimeFormat(DAY_KEY_LOCALE, { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }),
    day: new Intl.DateTimeFormat(undefined, { timeZone, weekday: 'short', day: 'numeric', month: 'short' }),
    time: new Intl.DateTimeFormat(undefined, { timeZone, hour: 'numeric', minute: '2-digit' }),
    full: new Intl.DateTimeFormat(undefined, {
      timeZone, weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit', timeZoneName: 'short',
    }),
  }), [timeZone]);

  const days = useMemo(() => {
    const byDay = new Map<string, string[]>();
    slots.forEach((slot) => {
      const key = formats.key.format(new Date(slot));
      const list = byDay.get(key);
      if (list) list.push(slot);
      else byDay.set(key, [slot]);
    });
    return Array.from(byDay, ([key, starts]) => ({ key, starts, label: formats.day.format(new Date(starts[0])) }));
  }, [slots, formats]);

  const activeDay = days.find((d) => d.key === dayKey) ?? days[0];

  const book = async (e: FormEvent) => {
    e.preventDefault();
    if (!start || submitting) return;
    setSubmitting(true);
    setNotice(null);
    try {
      const res = await fetch(BOOKING.CREATE_URL, {
        method: 'POST',
        headers: JSON_HEADERS,
        body: JSON.stringify({
          name: name.slice(0, BOOKING.NAME_MAX_LENGTH),
          email,
          start,
          timezone: BOOKING.TIMEZONE_PATTERN.test(timeZone) ? timeZone : undefined,
          notes: notes.slice(0, BOOKING.NOTES_MAX_LENGTH) || undefined,
          profile: BOOKING.PROFILE,
        }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok) {
        setPhase({ kind: 'booked', start: json?.data?.start ?? start, meetLink: json?.data?.meetLink ?? null });
        return;
      }
      if (res.status === HTTP_STATUS.CONFLICT) {
        setStart(null);
        setNotice(BOOKING.SLOT_TAKEN);
        await load();
        return;
      }
      if (res.status === HTTP_STATUS.SERVICE_UNAVAILABLE) {
        setPhase({ kind: 'unavailable' });
        return;
      }
      const clientError = res.status === HTTP_STATUS.BAD_REQUEST || res.status === HTTP_STATUS.TOO_MANY_REQUESTS;
      setNotice(clientError && typeof json?.message === 'string' ? json.message : BOOKING.FAILED);
    } catch {
      setPhase({ kind: 'unavailable' });
    } finally {
      if (activeRef.current) setSubmitting(false);
    }
  };

  if (phase.kind === 'booked') {
    return (
      <div role="status">
        <h3 ref={headingRef} tabIndex={-1} className={HEADING}>{COPY.BOOKED_HEADING}</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {COPY.BOOKED(formats.full.format(new Date(phase.start)), email)}
        </p>
        {phase.meetLink && (
          <a href={phase.meetLink} target="_blank" rel="noopener noreferrer" className={`mt-4 ${LINK}`}>
            {COPY.MEET} <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    );
  }

  if (phase.kind === 'unavailable' || phase.kind === 'skipped') {
    return (
      <div role="status">
        <h3 ref={headingRef} tabIndex={-1} className={HEADING}>{COPY.THANKS(name)}</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{COPY.REPLY}</p>
        {phase.kind === 'unavailable' && (
          <a href={`mailto:${CONTACT_EMAIL}`} className={`mt-4 ${LINK}`}>
            {COPY.FALLBACK_CTA} <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    );
  }

  const loading = phase.kind === 'loading';

  return (
    <form noValidate onSubmit={book} aria-busy={loading} className="flex flex-col gap-4">
      <div>
        <h3 ref={headingRef} tabIndex={-1} className={HEADING}>{COPY.PICK_HEADING(slotMinutes)}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{COPY.PICK_INTRO(name)}</p>
        <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500" title={timeZone}>
          <Globe size={12} aria-hidden="true" />
          {COPY.TIMEZONE(timeZoneLabel(timeZone))}
        </p>
      </div>

      {loading ? (
        <div aria-hidden="true" className="space-y-3">
          <div className="flex gap-2 overflow-hidden">
            {Array.from({ length: SKELETON_DAYS }, (_, i) => (
              <span key={i} className="h-9 w-24 shrink-0 rounded-lg bg-gray-100 dark:bg-white/5 motion-safe:animate-pulse" />
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {Array.from({ length: SKELETON_TIMES }, (_, i) => (
              <span key={i} className="h-9 rounded-lg bg-gray-100 dark:bg-white/5 motion-safe:animate-pulse" />
            ))}
          </div>
        </div>
      ) : (
        <>
          <fieldset>
            <legend className={LEGEND}>{COPY.DAY}</legend>
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:thin]">
              {days.map((day, i) => {
                const checked = day.key === activeDay?.key;
                const inputId = `booking-day-${i}`;
                return (
                  <label key={day.key} htmlFor={inputId} className="relative shrink-0 cursor-pointer">
                    <input
                      id={inputId}
                      type="radio"
                      name="booking-day"
                      value={day.key}
                      checked={checked}
                      onChange={() => {
                        setDayKey(day.key);
                        setStart(null);
                      }}
                      className="peer sr-only"
                    />
                    <span className={cn(CHIP, checked ? CHIP_ON : CHIP_OFF)}>{day.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className={LEGEND}>{COPY.TIME}</legend>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {activeDay?.starts.map((slot, i) => {
                const checked = slot === start;
                const inputId = `booking-time-${i}`;
                return (
                  <label key={slot} htmlFor={inputId} className="relative cursor-pointer">
                    <input id={inputId} type="radio" name="booking-time" value={slot} checked={checked} onChange={() => setStart(slot)} className="peer sr-only" />
                    <span className={cn(CHIP, 'w-full', checked ? CHIP_ON : CHIP_OFF)}>{formats.time.format(new Date(slot))}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </>
      )}

      <div className="flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800 pt-4">
        <button
          type="submit"
          disabled={!start || submitting || loading}
          aria-busy={submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <><Loader2 size={14} className="motion-safe:animate-spin" aria-hidden="true" /> {COPY.BOOKING}</>
          ) : (
            <>{COPY.BOOK} <ArrowRight size={14} aria-hidden="true" /></>
          )}
        </button>
        <p aria-live="polite" className="text-xs font-medium text-red-500 dark:text-red-400 empty:hidden">
          {loading ? <span className="sr-only">{COPY.LOADING}</span> : notice}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {COPY.BOOKING_AS(name, email)}
          <span aria-hidden="true"> · </span>
          <button type="button" onClick={() => setPhase({ kind: 'skipped' })} className="font-semibold text-gray-900 dark:text-white underline-offset-4 hover:underline">
            {COPY.SKIP}
          </button>
        </p>
      </div>
    </form>
  );
}

import { forwardRef, useEffect, useRef, useState } from 'react';
import { Maximize2, Play } from 'lucide-react';
import { prefersReducedMotion } from '@/lib/motion';

export type ProjectVideo = { webm?: string; mp4: string; poster?: string };
type Variant = 'crm' | 'shop' | 'ai';

/**
 * Browser-window frame for a project. Plays a muted screen recording while it is
 * on screen (loaded only when nearby); otherwise shows an animated schematic.
 */
const ProjectMedia = ({ url, variant, video }: { url: string; variant: Variant; video?: ProjectVideo }) => {
  const frame = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [near, setNear] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const el = frame.current!;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const autoplay = !prefersReducedMotion() && !conn?.saveData;
    setManual(!autoplay);

    const loader = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); loader.disconnect(); } }, { rootMargin: '300px' });
    loader.observe(el);

    const player = new IntersectionObserver(([e]) => {
      const on = e.isIntersecting;
      if (vid.current && autoplay) { if (on) vid.current.play().catch(() => {}); else vid.current.pause(); }
      // SMIL schematics pause too when out of view.
      if (svg.current) { if (on && autoplay) svg.current.unpauseAnimations(); else svg.current.pauseAnimations(); }
    }, { threshold: 0.3 });
    player.observe(el);
    return () => { loader.disconnect(); player.disconnect(); };
  }, []);

  const expand = () => {
    const v = vid.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen().catch(() => {});
    else v.webkitEnterFullscreen?.();
    v.play().catch(() => {});
  };

  return (
    <div ref={frame} className="group/media relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d0d0d] overflow-hidden shadow-[0_20px_40px_-24px_rgba(0,0,0,0.25)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 h-8 px-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#151515]">
        <span className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => <span key={i} className="w-2 h-2 rounded-full border border-gray-300 dark:border-gray-700" />)}
        </span>
        <span className="flex-1 min-w-0 mx-2 h-5 rounded-md bg-white dark:bg-[#0d0d0d] border border-gray-200 dark:border-gray-800 font-mono text-[10px] leading-5 text-gray-500 px-2 truncate">{url}</span>
        {video ? (
          <button onClick={expand} className="w-7 h-7 -mr-1 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Play fullscreen">
            <Maximize2 size={13} />
          </button>
        ) : (
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-400">preview</span>
        )}
      </div>

      <div className="relative aspect-[16/9] text-gray-900 dark:text-white">
        {video ? (
          <>
            <video ref={vid} muted loop playsInline preload="none" poster={video.poster} className="absolute inset-0 w-full h-full object-cover object-top" aria-label={`Screen recording of ${url}`}>
              {near && video.webm && <source src={video.webm} type="video/webm" />}
              {near && <source src={video.mp4} type="video/mp4" />}
            </video>
            {manual && (
              <button onClick={expand} className="absolute inset-0 flex items-center justify-center bg-black/10" aria-label="Play recording">
                <span className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg"><Play size={20} className="ml-0.5" /></span>
              </button>
            )}
          </>
        ) : (
          <Schematic ref={svg} variant={variant} />
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Schematics — hand-drawn product diagrams, animated with SMIL so they cost
// nothing on the main thread and can be paused as a group.
// ---------------------------------------------------------------------------

const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };
const L = 'currentColor';

const Schematic = forwardRef<SVGSVGElement, { variant: Variant }>(({ variant }, ref) => (
  <svg ref={ref} viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden="true">
    {variant === 'crm' && <Crm />}
    {variant === 'shop' && <Shop />}
    {variant === 'ai' && <Ai />}
  </svg>
));
Schematic.displayName = 'Schematic';

const Crm = () => {
  const cols = ['LEAD', 'QUALIFIED', 'PROPOSAL', 'WON'];
  return (
    <g>
      {cols.map((c, i) => (
        <g key={c} transform={`translate(${16 + i * 94} 18)`}>
          <text x="0" y="8" fontSize="8" fill={L} opacity=".55" style={mono}>{c}</text>
          <text x="80" y="8" fontSize="8" fill={L} opacity=".35" textAnchor="end" style={mono}>{[12, 7, 4, 9][i]}</text>
          <rect x="0" y="16" width="84" height="176" rx="6" fill={L} opacity=".035" />
          {[0, 1, 2].slice(0, 3 - (i === 2 ? 1 : 0)).map((r) => (
            <g key={r} transform={`translate(6 ${24 + r * 46})`} opacity={i === 3 ? 0.5 : 0.8}>
              <rect width="72" height="38" rx="4" fill="none" stroke={L} strokeOpacity=".22" />
              <rect x="8" y="9" width={36 + ((i + r) % 3) * 8} height="4" rx="2" fill={L} opacity=".5" />
              <rect x="8" y="19" width="26" height="3" rx="1.5" fill={L} opacity=".22" />
              <circle cx="62" cy="28" r="4" fill="none" stroke={L} strokeOpacity=".35" />
            </g>
          ))}
        </g>
      ))}
      {/* The deal that moves through the pipeline */}
      <g>
        <animateTransform attributeName="transform" type="translate" dur="7s" repeatCount="indefinite"
          values="22 180; 22 180; 116 180; 116 180; 210 180; 210 180; 304 180; 304 180"
          keyTimes="0; .12; .25; .37; .5; .62; .75; 1" calcMode="spline"
          keySplines=".7 0 .3 1; .7 0 .3 1; .7 0 .3 1; .7 0 .3 1; .7 0 .3 1; .7 0 .3 1; .7 0 .3 1" />
        <rect width="72" height="30" rx="4" fill={L} />
        <rect x="8" y="8" width="40" height="4" rx="2" className="fill-white dark:fill-gray-900" />
        <rect x="8" y="17" width="24" height="3" rx="1.5" className="fill-white dark:fill-gray-900" opacity=".6" />
      </g>
      {/* Automation toast */}
      <g transform="translate(236 196)">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.74;.78;.95;1" dur="7s" repeatCount="indefinite" />
        <rect width="150" height="20" rx="10" fill="none" stroke={L} strokeOpacity=".4" />
        <circle cx="12" cy="10" r="3" fill={L} />
        <text x="22" y="13.5" fontSize="8" fill={L} style={mono}>n8n → follow-up sent</text>
      </g>
    </g>
  );
};

const Shop = () => (
  <g>
    <g transform="translate(16 14)" opacity=".7">
      <rect width="250" height="14" rx="7" fill="none" stroke={L} strokeOpacity=".25" />
      <text x="12" y="10" fontSize="8" fill={L} opacity=".5" style={mono}>search: oak lounge chair</text>
    </g>
    {/* Cart */}
    <g transform="translate(352 14)">
      <rect width="32" height="14" rx="7" fill="none" stroke={L} strokeOpacity=".4" />
      <text x="16" y="10" fontSize="8" fill={L} textAnchor="middle" style={mono}>
        <tspan>2<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.55;.56;1" dur="5s" repeatCount="indefinite" /></tspan>
      </text>
      <text x="16" y="10" fontSize="8" fill={L} textAnchor="middle" style={mono} opacity="0">3
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.55;.56;.97;1" dur="5s" repeatCount="indefinite" />
      </text>
      <circle cx="16" cy="7" r="10" fill="none" stroke={L} strokeOpacity="0">
        <animate attributeName="r" values="7;7;16" keyTimes="0;.55;.75" dur="5s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0;0;.5;0" keyTimes="0;.55;.57;.75" dur="5s" repeatCount="indefinite" />
      </circle>
    </g>
    {/* Product grid */}
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const x = 16 + (i % 3) * 124, y = 40 + Math.floor(i / 3) * 90;
      return (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect width="116" height="82" rx="6" fill={L} opacity=".04" />
          <rect width="116" height="82" rx="6" fill="none" stroke={L} strokeOpacity={i === 1 ? 0.5 : 0.15}>
            {i === 1 && <animate attributeName="stroke-opacity" values=".15;.15;.8;.8;.15" keyTimes="0;.15;.25;.55;.7" dur="5s" repeatCount="indefinite" />}
          </rect>
          {/* Furniture glyph: simple chair / lamp / table silhouettes */}
          <g transform="translate(40 14)" fill="none" stroke={L} strokeOpacity=".45" strokeWidth="1.4" strokeLinecap="round">
            {i % 3 === 0 && <path d="M6 30V8a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v22M2 20h32M6 30v8M30 30v8" />}
            {i % 3 === 1 && <path d="M18 2l-10 16h20zM18 18v20M10 38h16" />}
            {i % 3 === 2 && <path d="M2 14h32M6 14v24M30 14v24M2 14l4-8h24l4 8" />}
          </g>
          <rect x="10" y="62" width="50" height="4" rx="2" fill={L} opacity=".5" />
          <text x="106" y="67" fontSize="8" fill={L} opacity=".6" textAnchor="end" style={mono}>{['₹18k', '₹4.2k', '₹31k', '₹9.9k', '₹2.4k', '₹26k'][i]}</text>
        </g>
      );
    })}
    {/* Pointer picks the lamp and the item flies to the cart */}
    <g>
      <animateTransform attributeName="transform" type="translate" dur="5s" repeatCount="indefinite"
        values="60 200; 200 90; 200 90; 368 22; 60 200" keyTimes="0; .2; .4; .55; 1" calcMode="spline"
        keySplines=".6 0 .2 1; 0 0 1 1; .6 0 .3 1; .6 0 .3 1" />
      <path d="M0 0l0 12 3.5-3 2.5 5 2-1-2.5-5h4.5z" fill={L} />
      <circle r="5" cx="2" cy="2" fill={L}>
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.39;.4;.55;.56" dur="5s" repeatCount="indefinite" />
      </circle>
    </g>
  </g>
);

const Ai = () => (
  <g>
    {/* Source document */}
    <g transform="translate(16 16)">
      <rect width="150" height="193" rx="6" fill={L} opacity=".035" />
      <text x="12" y="18" fontSize="8" fill={L} opacity=".5" style={mono}>workspace/spec.pdf</text>
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x="12" y={30 + i * 13} width={[118, 100, 124, 86, 112, 120, 94, 116, 70, 122, 104, 90][i]} height="4" rx="2" fill={L} opacity=".22">
          {(i === 3 || i === 7 || i === 8) && (
            <animate attributeName="opacity" values=".22;.22;.9;.9;.22" keyTimes="0;.2;.3;.7;.85" dur="6s" repeatCount="indefinite" />
          )}
        </rect>
      ))}
    </g>
    {/* Retrieval beams from the matching chunks to the answer */}
    {[3, 7, 8].map((i) => (
      <path key={i} d={`M150 ${48 + i * 13} C 200 ${48 + i * 13}, 200 132, 236 132`} fill="none" stroke={L} strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0">
        <animate attributeName="stroke-opacity" values="0;0;.6;.6;0" keyTimes="0;.22;.3;.7;.8" dur="6s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="0;-28" dur="1s" repeatCount="indefinite" />
      </path>
    ))}
    {/* Chat */}
    <g transform="translate(236 16)">
      <g>
        <rect x="40" y="0" width="108" height="34" rx="10" fill="none" stroke={L} strokeOpacity=".35" />
        <text x="50" y="14" fontSize="8" fill={L} opacity=".7" style={mono}>what's the rate</text>
        <text x="50" y="25" fontSize="8" fill={L} opacity=".7" style={mono}>limit per tenant?</text>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.14;.18;.3;.32" dur="6s" repeatCount="indefinite" />
        <text x="0" y="56" fontSize="8" fill={L} opacity=".5" style={mono}>⌕ searching 3 chunks…</text>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.32;.36;.92;1" dur="6s" repeatCount="indefinite" />
        <rect x="0" y="100" width="148" height="64" rx="10" fill={L} />
        {[0, 1, 2].map((r) => (
          <rect key={r} x="12" y={114 + r * 12} width={[110, 120, 64][r]} height="4" rx="2" className="fill-white dark:fill-gray-900" opacity=".85">
            <animate attributeName="width" values={`0;0;${[110, 120, 64][r]}`} keyTimes={`0;${0.36 + r * 0.06};${0.44 + r * 0.06}`} dur="6s" repeatCount="indefinite" />
          </rect>
        ))}
        <text x="12" y="158" fontSize="7" className="fill-white dark:fill-gray-900" opacity=".7" style={mono}>sources: p.3 · p.7 · p.8</text>
      </g>
      <g transform="translate(0 178)">
        <rect width="148" height="22" rx="11" fill="none" stroke={L} strokeOpacity=".25" />
        <rect x="12" y="7" width="1.5" height="8" fill={L}>
          <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" calcMode="discrete" />
        </rect>
      </g>
    </g>
  </g>
);

export default ProjectMedia;

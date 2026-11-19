export const CONTACT_EMAIL = 'shivaysharmachemistry@gmail.com';

const BOOKING_API_BASE = import.meta.env.VITE_BOOKING_API_URL || 'https://formiqstudio.in';

export const BOOKING = {
  SLOTS_URL: `${BOOKING_API_BASE}/api/booking/slots`,
  CREATE_URL: `${BOOKING_API_BASE}/api/booking`,
  PROFILE: 'portfolio',
  HOST_TIMEZONE: 'Asia/Kolkata',
  DEFAULT_SLOT_MINUTES: 30,
  NAME_MAX_LENGTH: 120,
  NOTES_MAX_LENGTH: 2000,
  TIMEZONE_PATTERN: /^[A-Za-z]+(?:[/_+-][A-Za-z0-9]+)*$/,
  SLOT_TAKEN: 'That time was just taken. Please pick another slot',
  FAILED: 'Could not book the call. Please try again',
} as const;

export const HTTP_STATUS = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  SERVICE_UNAVAILABLE: 503,
} as const;

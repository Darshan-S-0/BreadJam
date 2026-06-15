// Inline SVG doodle icons used in the header
export const LightbulbDoodle = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1a1a2e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 5 C13 5 8 10 8 17 C8 22 11 25 14 28 L14 32 L26 32 L26 28 C29 25 32 22 32 17 C32 10 27 5 20 5Z" />
    <line x1="15" y1="32" x2="25" y2="32" />
    <line x1="16" y1="35" x2="24" y2="35" />
    <line x1="20" y1="2" x2="20" y2="5" />
    <line x1="6" y1="8" x2="8" y2="10" />
    <line x1="34" y1="8" x2="32" y2="10" />
    <line x1="3" y1="17" x2="6" y2="17" />
    <line x1="37" y1="17" x2="34" y2="17" />
  </svg>
)

export const PencilDoodle = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1a1a2e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="14" y="4" width="12" height="30" rx="1" transform="rotate(-20 20 20)" />
    <path d="M10 32 L14 28 L18 36Z" />
    <line x1="14" y1="7" x2="26" y2="7" transform="rotate(-20 20 20)" />
    <line x1="14" y1="29" x2="26" y2="29" transform="rotate(-20 20 20)" />
  </svg>
)

export const BrainDoodle = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1a1a2e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 8 C14 8 9 12 9 17 C9 19 10 21 12 22 C10 23 9 25 9 27 C9 32 14 36 20 36 C26 36 31 32 31 27 C31 25 30 23 28 22 C30 21 31 19 31 17 C31 12 26 8 20 8Z" />
    <path d="M20 8 L20 36" />
    <path d="M12 22 C15 20 17 18 17 15" />
    <path d="M28 22 C25 20 23 18 23 15" />
    <path d="M12 28 C15 26 17 28 20 27" />
    <path d="M28 28 C25 26 23 28 20 27" />
  </svg>
)

export const NotebookDoodle = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#1a1a2e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="8" y="5" width="24" height="30" rx="2" />
    <line x1="8" y1="5" x2="8" y2="35" stroke="#e57373" strokeWidth="3" />
    <line x1="13" y1="12" x2="27" y2="12" />
    <line x1="13" y1="17" x2="27" y2="17" />
    <line x1="13" y1="22" x2="27" y2="22" />
    <line x1="13" y1="27" x2="21" y2="27" />
    <circle cx="8" cy="12" r="2" fill="#1a1a2e" />
    <circle cx="8" cy="20" r="2" fill="#1a1a2e" />
    <circle cx="8" cy="28" r="2" fill="#1a1a2e" />
  </svg>
)

export const StarDoodle = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke="#1a1a2e"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M10 2 L11.8 7.5 L17.6 7.5 L13 11 L14.8 16.5 L10 13 L5.2 16.5 L7 11 L2.4 7.5 L8.2 7.5 Z" />
  </svg>
)

export const ArrowDoodle = ({ size = 30 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    stroke="#1a1a2e"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M5 15 Q10 10 20 15 Q15 13 18 18" />
    <path d="M18 18 L22 14 M18 18 L14 20" />
  </svg>
)

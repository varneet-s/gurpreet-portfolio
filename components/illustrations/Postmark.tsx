export default function Postmark({ color = "#C6396B", size = 64 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Envelope body */}
      <rect x="6" y="16" width="52" height="34" rx="2" stroke={color} strokeWidth="1.4" fill="none" />
      {/* Envelope flap diagonal lines */}
      <path d="M6 16 L32 36 L58 16" stroke={color} strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      {/* Bottom fold lines */}
      <path d="M6 50 L24 34" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M58 50 L40 34" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Stamp box top-right */}
      <rect x="44" y="6" width="14" height="16" rx="1.5" stroke={color} strokeWidth="1" fill="none" strokeDasharray="2 1.5" />
      {/* Small flower in stamp */}
      <circle cx="51" cy="14" r="2.5" stroke={color} strokeWidth="1" fill="none" />
      <path d="M51 11 L51 8" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M54 14 L57 14" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M48 14 L45 14" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M53 12 L55 10" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M49 12 L47 10" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

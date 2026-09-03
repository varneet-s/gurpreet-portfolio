export default function SprigLeaf({ color = "#241C14", size = 48 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M24 44 C24 44 22 32 20 22 C18 12 22 6 24 4"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left leaf */}
      <path
        d="M20 22 C14 18 10 12 14 8 C16 16 20 22 20 22Z"
        stroke={color}
        strokeWidth="1.1"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right leaf */}
      <path
        d="M22 18 C28 14 34 10 30 6 C26 14 22 18 22 18Z"
        stroke={color}
        strokeWidth="1.1"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Small top bud */}
      <path
        d="M24 4 C24 4 22 2 24 0 C26 2 24 4 24 4Z"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      {/* Lower right leaf */}
      <path
        d="M21 30 C27 28 32 24 28 20 C24 26 21 30 21 30Z"
        stroke={color}
        strokeWidth="1.1"
        fill="none"
      />
    </svg>
  );
}

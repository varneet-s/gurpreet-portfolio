export default function SquiggleLine({ color = "#D8B98C", width = 600 }: { color?: string; width?: number }) {
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${width} 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path
        d={`M0 16 C${width * 0.05} 6, ${width * 0.1} 26, ${width * 0.15} 16 C${width * 0.2} 6, ${width * 0.25} 26, ${width * 0.3} 16 C${width * 0.35} 6, ${width * 0.4} 26, ${width * 0.45} 16 C${width * 0.5} 6, ${width * 0.55} 26, ${width * 0.6} 16 C${width * 0.65} 6, ${width * 0.7} 26, ${width * 0.75} 16 C${width * 0.8} 6, ${width * 0.85} 26, ${width * 0.9} 16 C${width * 0.95} 6, ${width} 26, ${width} 16`}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

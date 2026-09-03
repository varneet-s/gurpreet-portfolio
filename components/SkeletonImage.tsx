"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  polaroid?: boolean;
  tilt?: "neg" | "pos" | "none";
}

export default function SkeletonImage({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  polaroid = false,
  tilt = "none",
}: Props) {
  const [loaded, setLoaded] = useState(false);

  const wrapper: React.CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: `${width} / ${height}`,
    overflow: polaroid ? "visible" : "hidden",
    ...(polaroid
      ? {
          ...(tilt === "neg" ? { transform: "rotate(-2deg)" } : {}),
          ...(tilt === "pos" ? { transform: "rotate(2deg)" } : {}),
          background: "#fff",
          padding: "10px 10px 28px",
          boxShadow: "0 2px 16px rgba(36,28,20,0.12)",
        }
      : {}),
    ...style,
  };

  return (
    <div style={wrapper} className={className}>
      {/* Skeleton placeholder */}
      {!loaded && (
        <div
          className="skeleton"
          style={{
            position: "absolute",
            inset: polaroid ? "10px 10px 28px 10px" : 0,
            borderRadius: 2,
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 300ms ease",
          position: "absolute",
          inset: polaroid ? "10px 10px 28px 10px" : 0,
          width: "auto",
          height: "auto",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

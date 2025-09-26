// components/TwoFrameAnimator.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

type Props = {
  srcA: string;
  srcB: string;
  alt?: string;
  width?: number;
  height?: number;
  speedMs?: number;
  className?: string;     // wrapper styles (size, rounding, etc.)
  imgClassName?: string;  // styles applied to each frame (e.g., hover opacity)
};

export default function TwoFrameAnimator({
  srcA,
  srcB,
  alt = "animation",
  width = 280,
  height = 180,
  speedMs = 450,
  className = "",
  imgClassName = "",
  children,
}: PropsWithChildren<Props>) {
  const [showA, setShowA] = useState(true);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      reduceMotionRef.current = window
        .matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    if (reduceMotionRef.current) return;

    const id = setInterval(() => setShowA((s) => !s), speedMs);
    return () => clearInterval(id);
  }, [speedMs]);

  const baseImg =
    "absolute inset-0 object-contain select-none pointer-events-none transition-opacity duration-75";

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-white shadow ${className}`}
      style={{ width, height }}
    >
      <Image
        src={srcA}
        alt={alt}
        fill
        priority
        className={`${baseImg} ${showA ? "opacity-100" : "opacity-0"} ${imgClassName}`}
      />
      <Image
        src={srcB}
        alt={alt}
        fill
        priority
        className={`${baseImg} ${showA ? "opacity-0" : "opacity-100"} ${imgClassName}`}
      />

      {/* Overlay slot (label, badges, etc.) */}
      {children ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      ) : null}
    </div>
  );
}
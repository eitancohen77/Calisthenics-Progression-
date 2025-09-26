// components/TwoFrameAnimator.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TwoFrameAnimator({
  srcA,
  srcB,
  alt = "animation",
  width = 280,
  height = 180,
  speedMs = 450, // time each frame is shown
}: {
  srcA: string;
  srcB: string;
  alt?: string;
  width?: number;
  height?: number;
  speedMs?: number;
}) {
  const [showA, setShowA] = useState(true);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined") {
      reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    if (reduceMotionRef.current) return;

    const id = setInterval(() => setShowA((s) => !s), speedMs);
    return () => clearInterval(id);
  }, [speedMs]);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-white shadow"
      style={{ width, height }}
    >
      {/* Frame A */}
      <Image
        src={srcA}
        alt={alt}
        fill
        className={`absolute inset-0 object-contain select-none pointer-events-none transition-opacity duration-75 ${
          showA ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
      {/* Frame B */}
      <Image
        src={srcB}
        alt={alt}
        fill
        className={`absolute inset-0 object-contain select-none pointer-events-none transition-opacity duration-75 ${
          showA ? "opacity-0" : "opacity-100"
        }`}
        priority
      />
    </div>
  );
}

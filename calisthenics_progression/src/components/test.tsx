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
  className?: string;
  imgClassName?: string;
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

  const sameImage = srcA === srcB;

  useEffect(() => {
    if (sameImage) return; // don’t start flicker when identical

    if (typeof window !== "undefined") {
      reduceMotionRef.current = window
        .matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    if (reduceMotionRef.current) return;

    const id = setInterval(() => setShowA((s) => !s), speedMs);
    return () => clearInterval(id);
  }, [speedMs, sameImage]);

  const baseImg =
    "absolute inset-0 object-contain select-none pointer-events-none transition-opacity duration-75";

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-white shadow ${className}`}
      style={{ width, height }}
    >
      {sameImage ? (
        <Image
          src={srcA}
          alt={alt}
          fill
          priority
          className={`${baseImg} ${imgClassName}`}
        />
      ) : (
        <>
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
        </>
      )}

      {children ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      ) : null}
    </div>
  );
}
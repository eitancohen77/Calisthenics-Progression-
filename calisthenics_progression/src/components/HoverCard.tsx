"use client";

import Link from "next/link";
import TwoFrameAnimator from "@/components/TwoFrameAnimator";

type Props = {
  srcA: string;      // first frame
  srcB: string;      // second frame
  alt: string;
  label: string;
  href?: string;
  className?: string;
  locked?: boolean;
  width?: number;
  height?: number;
  speedMs?: number;
};

export default function HoverCard({
  srcA,
  srcB,
  alt,
  label,
  href,
  className,
  locked = false,
  width = 256,   // ~ w-64
  height = 160,  // ~ h-40
  speedMs = 450,
}: Props) {
  const card = (
    <TwoFrameAnimator
      srcA={srcA}
      srcB={srcB}
      alt={alt}
      width={width}
      height={height}
      speedMs={speedMs}
      className={[
        "group rounded-xl",          // rounding & base
        locked ? "grayscale opacity-60" : "",
        className ?? "",
      ].join(" ")}
      // This line preserves the “dim on hover” look like pic 2
      imgClassName={locked ? "opacity-40" : "group-hover:opacity-20"}
    >
      {/* Centered label that fades in on hover */}
      <p className={[
        "text-black text-3xl font-semibold text-center",
        locked ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        "transition-opacity duration-500",
      ].join(" ")}>
        {label}
      </p>
    </TwoFrameAnimator>
  );

  return href ? (
    <Link
      href={href}
      className={locked ? "pointer-events-none" : ""}
      aria-disabled={locked}
    >
      {card}
    </Link>
  ) : (
    card
  );
}

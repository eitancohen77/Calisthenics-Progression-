"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import TwoFrameAnimator from "@/components/test";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  linkText?: string;
  linkHref?: string;
  description?: string;

  imgSrcA: string;
  imgSrcB: string;
  imgAlt?: string;

  durationMs?: number;   // fade only
  speedMs?: number;      // frame swap speed

  // NEW: fixed-size like HoverCard
  imgWidth?: number;     // default 280
  imgHeight?: number;    // default 180
};

export default function ImageModel({
  open,
  onClose,
  title,
  linkText = "Link for illustration",
  linkHref,
  description,
  imgSrcA,
  imgSrcB,
  imgAlt = "",
  durationMs = 200,
  speedMs = 450,
  imgWidth = 280,        // ← defaults like your HoverCard
  imgHeight = 180,
}: Props) {

  const panelRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const id = setTimeout(() => setMounted(false), durationMs);
      return () => clearTimeout(id);
    }
  }, [open, durationMs]);

  // ESC closes
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted, onClose]);

  // outside click closes
  const onBackdropMouseDown = (e: React.MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose();
  };

  if (!mounted) return null;

  const fade = `transition-opacity duration-[${durationMs}ms] ${visible ? "opacity-100" : "opacity-0"}`;

return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={onBackdropMouseDown}
    >
      <div className={`absolute inset-0 bg-black/60 ${fade}`} />

      <div
        ref={panelRef}
        className={`relative mx-auto w-full max-w-5xl rounded-xl bg-white shadow-2xl ${fade}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Left: text */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-semibold mb-2">{title}</h2>
            {linkHref ? (
              <a
                href={linkHref}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 font-medium underline underline-offset-4 mb-4"
              >
                {linkText}
              </a>
            ) : (
              <p className="text-red-500 font-medium mb-4">{linkText}</p>
            )}
            <p className="text-neutral-800 leading-relaxed whitespace-pre-line">{description}</p>
          </div>

          {/* Right: fixed-size two-frame image (no fill, no aspect) */}
          <div className="flex items-center justify-center">
            <TwoFrameAnimator
              srcA={imgSrcA}
              srcB={imgSrcB}
              alt={imgAlt}
              width={imgWidth}     // ← explicit size
              height={imgHeight}
              speedMs={speedMs}
              // remove className/imgClassName that forced fill/absolute
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-black text-white px-4 py-2 hover:opacity-90"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

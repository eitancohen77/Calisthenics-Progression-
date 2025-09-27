"use client";
import * as React from 'react';
import HoverCard from '@/components/HoverCard';
import TwoFrameAnimator from '@/components/TwoFrameAnimator';
import ImageModel from '@/components/ImageModel';

const exercises = [
  {
    key: "Wall Handstand",
    srcA: "/wallhandstand.png",
    srcB: "/wallhandstand.png",
    alt: "HandWall Handstand",
    label: "Wall Handstand",
    title: "Wall Handstand",
    description: `Short cues:\n- Lean shoulders forward\n- Straight arms\n- Hollow body`,
    linkHref: "https://youtu.be/6lgNlJZpE1Y?t=33",
  },
  {
    key: "Handstand",
    srcA: "/handstand.png",
    srcB: "/handstand.png",
    alt: "Handstand",
    label: "Handstand",
    title: "Handstand",
    description: `Short cues:\n- Lean shoulders forward\n- Straight arms\n- Hollow body`,
    linkHref: "https://youtu.be/6lgNlJZpE1Y?t=33",
  },
  {
    key: "Handstand Push Up",
    srcA: "/handstandup.png",
    srcB: "/handstanddown.png",
    alt: "Handstand Push Up",
    label: "Handstand Push Up",
    title: "Handstand Push Up",
    description: `Short cues:\n- Lean shoulders forward\n- Straight arms\n- Hollow body`,
    linkHref: "https://youtu.be/6lgNlJZpE1Y?t=33",
  },
]
export default function Home() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-900">
        <div className="flex flex-wrap gap-4 justify-start pl-8">
          {exercises.map((ex) => (
            <button
              key={ex.key}
              onClick={() => setOpen(ex.key)}
              className="cursor-pointer bg-transparent p-0 border-0"
            >
              <HoverCard
                srcA={ex.srcA}
                srcB={ex.srcB}
                alt={ex.alt}
                label={ex.label}
              />
            </button>
          ))}
        </div>
      </div>
      {exercises.map((ex) => (
        <ImageModel
          key={ex.key}
          open={open === ex.key}
          onClose={() => setOpen(null)}
          title={ex.title}
          linkText="Link for illustration"
          linkHref={ex.linkHref}
          description={ex.description}
          imgSrcA={ex.srcA}
          imgSrcB={ex.srcB}
          imgAlt={ex.alt}
          durationMs={200}
          speedMs={450}
          imgWidth={320}
          imgHeight={200}
        />
      ))}
    </>
  );
}

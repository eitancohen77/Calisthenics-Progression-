"use client";

import * as React from "react";
import HoverCard from "@/components/HoverCard";
import ImageModel from "@/components/ImageModel";

const exercises = [
  {
    key: "planchelean",
    srcA: "/planchelean.png",
    srcB: "/planchelean.png",
    alt: "Planche Lean",
    label: "Planche Lean",
    title: "Planche Lean",
    description: `Short cues:\n- Lean shoulders forward\n- Straight arms\n- Hollow body`,
    linkHref: "https://youtu.be/6lgNlJZpE1Y?t=33",
  },
  {
    key: "frogstand",
    srcA: "/frogstand.png",
    srcB: "/frogstand.png",
    alt: "Frog Stand",
    label: "Frog Stand",
    title: "Frog Stand",
    description: `Short cues:\n- Knees on elbows\n- Balance with hands\n- Look forward`,
    linkHref: "https://www.youtube.com/watch?v=VFYZh24e0RI",
  },
  {
    key: "straddleplanche",
    srcA: "/straddleplanche.png",
    srcB: "/straddleplanche.png",
    alt: "Straddle Planche",
    label: "Straddle Planche",
    title: "Straddle Planche",
    description: `Short cues:\n- Protract shoulders\n- Hollow body\n- Straddle legs`,
    linkHref: "https://youtu.be/dHLYwZV96zw?t=296",
  },
  {
    key: "planchepress",
    srcA: "/planchepressup.png",
    srcB: "/planchepressdown.png",
    alt: "Planche Press",
    label: "Planche Press",
    title: "Planche Press",
    description: `Short cues:\n- Press slowly\n- Control up & down\n- Keep elbows locked`,
    linkHref: "/planche",
  },
];

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

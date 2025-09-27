"use client";

import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import HoverCard from '@/components/HoverCard';
import TwoFrameAnimator from '@/components/test';
import ImageModel from '@/components/ImageModel';


export default function Home() {

const [open, setOpen] = React.useState<null | "planche" | "handstand" | "pullup">(null);
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex gap-4">
              <button
                onClick={() => setOpen("planche")}
                className="cursor-pointer bg-transparent p-0 border-0"
              >
                <HoverCard
                  srcA="/planche.png"
                  srcB="/planche.png"
                  alt="Planche"
                  label="Planche"
                />
            </button>
              <HoverCard srcA="/handstand.png" srcB="/handstand.png" alt="Handstand" label="Handstand" href="/handstand"/>
              <HoverCard srcA="/pullup.png" srcB="/pullup.png" alt="Pull-Ups" label="Pull-Ups" href="/pull-Ups"/>
            </div>
        </div>

        <ImageModel
          open={open === "planche"}
          onClose={() => setOpen(null)}
          title="Planche"
          linkText="Link for illustration"
          linkHref="https://youtu.be/your-link"
          description={`Short cues:\n- Protract + lean\n- Hollow body\n- Straight elbows`}
          imgSrcA="/planche.png"
          imgSrcB="/planche.png"
          imgAlt="Planche silhouette"
          durationMs={200}
          speedMs={450}
          imgWidth={320}
          imgHeight={200}
      />

    </>
  )
}
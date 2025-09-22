import * as React from 'react';
import Image from "next/image";
import HoverCard from '@/components/HoverCard';

const isLocked = true
export default function Home() {
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex flex-wrap gap-4 justify-start pl-8">
              <HoverCard src="/planchelean.png" alt="Planche Lean" label="Planche Lean" href="https://youtu.be/6lgNlJZpE1Y?t=33"/>
              <HoverCard src="/frogstand.png" alt="Frog Stand" label="Frog Stand" href="https://www.youtube.com/watch?v=VFYZh24e0RI"/>
              <HoverCard src="/straddleplanche.png" alt="Straddle Planche" label="Straddle Planche" href="https://youtu.be/dHLYwZV96zw?t=296"/>
              <HoverCard src="/planche.png" alt="Planche" label="Planche" href="https://www.youtube.com/watch?v=acij_BzyXRg"/>
            </div>
        </div>
    </>
  )
}
import * as React from 'react';
import Image from "next/image";
import HoverCard from '@/components/HoverCard';
import TwoFrameAnimator from '@/components/test';


const isLocked = true
export default function Home() {
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex flex-wrap gap-4 justify-start pl-8">              
              <HoverCard srcA="/planchelean.png" srcB="/planchelean.png" alt="Planche Lean" label="Planche Lean" href="https://youtu.be/6lgNlJZpE1Y?t=33"/>
              <HoverCard srcA="/frogstand.png" srcB="/frogstand.png" alt="Frog Stand" label="Frog Stand" href="https://www.youtube.com/watch?v=VFYZh24e0RI"/>
              <HoverCard srcA="/straddleplanche.png" srcB="/straddleplanche.png" alt="Straddle Planche" label="Straddle Planche" href="https://youtu.be/dHLYwZV96zw?t=296"/>
              <HoverCard srcA="/planchepressup.png" srcB="/planchepressdown.png" alt="Planche" label="Planche" href="/planche"/>

              
            </div>
        </div>
    </>
  )
}
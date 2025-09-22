import * as React from 'react';
import Image from "next/image";
import HoverCard from '@/components/HoverCard';


export default function Home() {
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex gap-4">
              <HoverCard src="/planche.png" alt="Frog Stand" label="Frog Stand" href="/planche"/>
              <HoverCard src="/planche.png" alt="Planche Lean" label="Planche Lean" href="/planche"/>
              <HoverCard src="/planche.png" alt="Tuck Planche" label="Tuck Planche" href="/planche"/>
              <HoverCard src="/planche.png" alt="Tuck Planche Push Up" label="Tuck Planche Push Up" href="/planche"/>
              <HoverCard src="/planche.png" alt="Straddle Planche" label="Straddle Planche" href="/planche"/>
              <HoverCard src="/planche.png" alt="Planche" label="Planche" href="/planche"/>
            </div>
        </div>
    </>
  )
}
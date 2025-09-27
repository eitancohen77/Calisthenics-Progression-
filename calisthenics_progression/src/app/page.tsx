import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import HoverCard from '@/components/HoverCard';
import TwoFrameAnimator from '@/components/TwoFrameAnimator';


export default function Home() {

  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex gap-4">
              <HoverCard srcA="/planche.png" srcB="/planche.png" alt="planche" label="planche" href="/planche"/>
              <HoverCard srcA="/handstand.png" srcB="/handstand.png" alt="Handstand" label="Handstand" href="/handstand"/>
              <HoverCard srcA="/pullup.png" srcB="/pullup.png" alt="Pull-Ups" label="Pull-Ups" href="/pull-Ups"/>
            </div>
        </div>

    </>
  )
}
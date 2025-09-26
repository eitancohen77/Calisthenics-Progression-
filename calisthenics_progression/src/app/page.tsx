import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import HoverCard from '@/components/HoverCard';
import TwoFrameAnimator from '@/components/test';


export default function Home() {
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex gap-4">
              <HoverCard src="/planche.png" alt="Planche" label="Planche" href="/planche"/>
              <HoverCard src="/handstand.png" alt="Handstand" label="Handstand" href="/handstand"/>
              <HoverCard src="/pullup.png" alt="Pull-Ups" label="Pull-Ups" href="/pullups"/>
              <HoverCard srcA="/planchepressup.png" srcB="/planchepressdown.png" alt="Planche" label="Planche" href="/planche"/>
            </div>
        </div>
    </>
  )
}
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
              <TwoFrameAnimator
                srcA="/handstandup.png"
                srcB="/handstanddown.png"
                speedMs={400}
              />
            </div>
        </div>
    </>
  )
}
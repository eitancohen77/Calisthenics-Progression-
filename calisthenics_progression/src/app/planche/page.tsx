import * as React from 'react';
import Image from "next/image";


export default function Home() {
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex gap-4">
              <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src='/planche.png'
                  alt='planche'
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src='/handstand.png'
                  alt='handstand'
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src='/pullup.png'
                  alt='pullup'
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
        </div>
    </>
  )
}
import * as React from 'react';
import Image from "next/image";


export default function Home() {
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex gap-4">


                <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden group">
                <Image
                  src='/planche.png'
                  alt='Planche Lean'
                  fill
                  className="object-contain transition-opacity duration-500 group-hover:opacity-20"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-black text-3xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center">
                    Planche Lean
                    </p>
                </div>
              </div>


              <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden group">
                <Image
                  src='/planche.png'
                  alt='Frog Stand'
                  fill
                  className="object-contain transition-opacity duration-500 group-hover:opacity-20"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-black text-3xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center">
                    Frog Stand
                    </p>
                </div>
              </div>

            
            <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden group">
                <Image
                  src='/planche.png'
                  alt='Tuck Planche'
                  fill
                  className="object-contain transition-opacity duration-500 group-hover:opacity-20"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-black text-3xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center">
                    Tuck Planche
                    </p>
                </div>
              </div>


            <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden group">
                <Image
                  src='/planche.png'
                  alt='Tuck Planche Push Up'
                  fill
                  className="object-contain transition-opacity duration-500 group-hover:opacity-20"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-black text-3xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center">
                    Tuck Planche Push Up
                    </p>
                </div>
              </div>


              <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden group">
                <Image
                  src='/planche.png'
                  alt='Straddle Planche'
                  fill
                  className="object-contain transition-opacity duration-500 group-hover:opacity-20"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-black text-3xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center">
                    Straddle Planche
                    </p>
                </div>
              </div>


              <div className="relative w-64 h-40 bg-white p-2 rounded shadow hover:shadow-xl hover:scale-105 transition-transform overflow-hidden group ">
                <Image
                  src='/planche.png'
                  alt='Planche'
                  fill
                  className="object-contain transition-opacity duration-500 group-hover:opacity-20"
                  priority
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-black text-3xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center">
                    Planche
                    </p>
                </div>
              </div>  
            </div>
        </div>
    </>
  )
}
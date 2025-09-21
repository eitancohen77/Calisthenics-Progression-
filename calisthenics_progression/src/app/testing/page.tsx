import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <>
        <div className="p-6 bg-red-500 text-white">Tailwind is working</div>

        <div className="flex min-h-screen items-center justify-center bg-slate-900">
            <div className="flex gap-6">
                <div className="bg-white text-black p-4 rounded shadow">Hello</div>
                <div className="bg-white text-black p-4 rounded shadow">Shalom</div>
                <div className="bg-white text-black p-4 rounded shadow">Whats Up</div>
            </div>
        </div>
    </>
  )
}

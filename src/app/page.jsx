'use client'

import Link from 'next/link'
import { useTheme } from '@/context/ProvideTheme'
import { useEffect } from 'react'

export default function Home () {
  const { setTheme } = useTheme()
  useEffect(() => setTheme(''), [])
  return (
    <>
      <header style={{ backdropFilter: 'blur(3px)' }} className='w-full bg-black z-10 fixed top-0 left-0 p-2 bg-opacity-20'>
        <nav className='m-0 flex gap-12 items-center justify-start bg-opacity-80 w-full  rounded-lg p-4' >
          <h1 className='text-4xl font-semibold  p-0 m-0'>CO2 BACK-OFFICE</h1>
        </nav>
      </header>

      <main className="flex min-h-full flex-col gap-6 items-center justify-evenly">
        <h2 className="text-5xl">QUE TEMA QUERES CONFIGURAR?</h2>
        <img width='300px' height='300px' style={{}} src="/coco.jpg" alt="" />
        <div className="gap-10 flex">
          <Link href='/individuo' className="p-5 bg-green-400 text-2xl font-medium text-black rounded-md"><h4 onClick={() => setTheme('individuo')}>INDIVIDUO</h4></Link>
          <Link href='/empresa' className="p-5 bg-green-400 text-2xl font-medium text-black rounded-md"><h4 onClick={() => setTheme('empresa')}>EMPRESA</h4></Link>
        </div>
      </main>
    </>
  )
}

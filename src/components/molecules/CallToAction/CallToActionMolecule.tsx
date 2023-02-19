import React from 'react'
import Link  from 'next/link'

export const CallToActionMolecule = () => {
  return (
    <div className='flex flex-col items-center bg-black p-10'>
      <div className='container mb-8'>
        <div className='w-[80%] text-white'>
          <h2 className='text-xl font-bold mb-4'>Attorneys with you, every step of the way</h2>
          <p>Starting with our DIY services doesn’t mean you have to do it all by yourself. Count on our vetted network of attorneys for guidance—no hourly charges, no office visits.</p>
        </div>
      </div>
      <div className='container flex items-center gap-x-4 text-white'>
        <Link href='/' className='btn btn-outline btn-accent font-bold mr-4'>
          Get legal help
        </Link>
        <Link href='/' className='link font-bold text-md'>Legal plan</Link>
        <Link href='/' className='link font-bold text-md'>Schedule a call</Link>
        <Link href='/' className='link font-bold text-md'>Attorney directory</Link>
      </div>
    </div>
  )
}

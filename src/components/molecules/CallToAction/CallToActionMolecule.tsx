import React from 'react'
import Link from 'next/link'

export const CallToActionMolecule = () => {
  return (
    <div className='flex flex-col content-center items-center bg-black p-10 m-0'>
      <div className='container mb-8 text-center'>
        <div className=' text-white m-0'>
          <h2 className='text-xl font-bold mb-4 '>Attorneys with you, every step of the way</h2>
          <p>Starting with our DIY services doesn’t mean you have to do it all by yourself. Count on our vetted network of attorneys for guidance—no hourly charges, no office visits.</p>
        </div>
      </div>
      <div className='container  flex flex-col items-center gap-x-4 text-white'>
        <Link href='/' className='btn btn-outline btn-accent font-bold mr-4 mb-10'>
          Get legal help
        </Link>
        <div className='flex overflow-x-visible container w-full justify-center'>
          <Link href='/' className='link font-bold text-sm mr-4'>Legal plan</Link>
          <Link href='/' className='link font-bold text-sm mr-4'>Schedule a call</Link>
          <Link href='/' className='link font-bold text-sm '>Attorney directory</Link>
        </div>
      </div>
    </div>
  )
}

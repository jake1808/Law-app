import { ImageCard } from '@/components/molecules/ImageCard/ImageCard'
import Link from 'next/link'
import React from 'react'

export const LegalSection = () => {
  return (
    <div className='flex flex-col w-full p-10 justify-center content-center mb-20'>
      <div className='container mb-36'>
        <h3 className='text-center font-bold text-5xl mb-6'>Legal help for every part of your life</h3>
        <ImageCard image={{
          src: 'https://source.unsplash.com/random/?carpenter',
          alt: 'ooouu'
        }} cardPos='right' />
      </div>
      <div className='container mb-6'>
        <h3 className='font-bold text-2xl mb-4'>For your business</h3>
        <p className='font-semibold text-lg'>Whether you need to form a company&#44; apply for licenses and permits&#44; or get a tax ID&#44; we&#39;ll set your business up for success.</p>
      </div>
      <div className='container'>
        <Link href='#'>Start my business</Link>
      </div>
    </div>
  )
}

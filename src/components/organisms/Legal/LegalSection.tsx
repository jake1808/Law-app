import { ImageCard } from '@/components/molecules/ImageCard/ImageCard'
import React from 'react'

export const LegalSection = () => {
  return (
    <div className='flex flex-col w-full p-10 justify-center content-center mb-20'>
      <div className='container'>
        <h3 className='text-center font-bold text-5xl mb-6'>Legal help for every part of your life</h3>
        <ImageCard image={{
          src: 'https://source.unsplash.com/random/?carpenter',
          alt: 'ooouu'
        }} cardPos='right' />
      </div>
    </div>
  )
}

import { ImageCard } from '@/components/molecules/ImageCard/ImageCard'
import Link from 'next/link'
import React from 'react'
import { GoLightBulb } from 'react-icons/go'
import { BsShieldSlash } from 'react-icons/bs'
import { TbScribble } from 'react-icons/tb'

export const LegalSection = () => {
  return (
    <div className='flex flex-col w-full p-10 justify-center content-center mb-20'>
      <div className='container mb-36'>
        <h3 className='text-center font-bold text-5xl mb-6'>Legal help for every part of your life</h3>
        <ImageCard image={{
          src: 'https://source.unsplash.com/random/?carpenter',
          alt: 'ooouu'
        }}
          cardPos='right'
          cardText='We&apos;ve made dreams a reality for 2M&#43; entrepreneurs.'
          icon={<GoLightBulb color='black' size={30} className='mb-4' />}
        />
      </div>
      <div className='container mb-6'>
        <h3 className='font-bold text-2xl mb-4'>For your business</h3>
        <p className='font-semibold text-lg'>Whether you need to form a company&#44; apply for licenses and permits&#44; or get a tax ID&#44; we&#39;ll set your business up for success.</p>
      </div>
      <div className='container mb-12'>
        <Link href='#' className='btn btn-accent btn-wide'>Start my business</Link>
        <div className='grid grid-cols-2 gap-4 mt-6'>
          <Link href='#' className='btn btn-accent btn-outline '>LCC</Link>
          <Link href='#' className='btn btn-accent btn-outline '>Corporation</Link>
          <Link href='#' className='btn btn-accent btn-outline '>DBA</Link>
          <Link href='#' className='btn btn-accent btn-outline '>Get legal help</Link>
        </div>
      </div>
      <div className='container mb-40'>
        <ImageCard
          image={{
            src: 'https://source.unsplash.com/random/?Father',
            alt: 'ooouu'
          }}
          cardPos='left'
          cardText='Every 2 minutes someone created an estate plan document with us to protect their family&#39;s future.*'
          icon={<BsShieldSlash color='black' size={30} className='mb-4' />}
        />
      </div>
      <div className='container mb-6'>
        <h3 className='font-bold text-2xl mb-4'>For you and your family</h3>
        <p className='font-semibold text-lg'>From wills to powers of attorney&#44; the right estate planning documents can safeguard you and your loved ones&#8212; both now&#44; and later.</p>
      </div>
      <div className="container mb-12">
        <Link href='#' className='btn btn-accent btn-wide'>Start my Estate Plan</Link>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Link href='#' className='btn btn-accent btn-outline '>Last will</Link>
          <Link href='#' className='btn btn-accent btn-outline '>Living trust</Link>
          <div className="col-span-2">
            <Link href='#' className='btn btn-accent btn-outline '>Power of attorney</Link>
          </div>
          <Link href='#' className='btn btn-accent btn-outline '>Get legal help</Link>
        </div>
      </div>
      <div className='container mb-40'>
        <ImageCard
          image={{
            src: 'https://source.unsplash.com/random/?Studying',
            alt: 'ooouu'
          }}
          cardPos='right'
          cardText='6&#37; of all trademark registration applications in Zambia were made through us.*'
          icon={<TbScribble color='black' size={30} className='mb-4' />}
        />
      </div>
      <div className="container mb-6">
        <h3 className='font-bold text-2xl mb-4'>For your intellectual property</h3>
        <p className='font-semibold text-lg'>Need to trademark your logo&#44; copyright a creative work&#44; or patent an invention? Protect yourself against copycats.</p>
      </div>
      <div className="container">
        <Link href='#' className='btn btn-accent btn-wide mb-4'>View all options</Link>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Link href='#' className='btn btn-accent btn-outline '>Trademarks</Link>
          </div>
          <Link href='#' className='btn btn-accent btn-outline '>Copyrights</Link>
          <Link href='#' className='btn btn-accent btn-outline '>Patents</Link>

        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import { BsShieldSlash } from 'react-icons/bs'
import { ImageCard } from '../../atoms/ImageCard/ImageCard'

export const ForYouAndYourFamily = () => {
    return (
        <>
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
        </>
    )
}

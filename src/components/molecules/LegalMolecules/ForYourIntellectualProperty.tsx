import Link from 'next/link'
import React from 'react'
import { TbScribble } from 'react-icons/tb'
import { ImageCard } from '../../atoms/ImageCard/ImageCard'

export const ForYourIntellectualProperty = () => {
    return (
        <>
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
            <div className="container mb-12">
                <Link href='#' className='btn btn-accent btn-wide mb-4'>View all options</Link>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <Link href='#' className='btn btn-accent btn-outline '>Trademarks</Link>
                    </div>
                    <Link href='#' className='btn btn-accent btn-outline '>Copyrights</Link>
                    <Link href='#' className='btn btn-accent btn-outline '>Patents</Link>

                </div>
            </div>
        </>
    )
}

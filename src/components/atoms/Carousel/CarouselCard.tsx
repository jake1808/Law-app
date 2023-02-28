import React from 'react'
import Image from 'next/image'

interface Props {
    image: {
        src: string,
        alt: string
    },
    cardTitle: string,
    cardDescription: string,
    cardAuthor: string
}

export const CarouselCard = ({ image, cardTitle, cardDescription, cardAuthor }: Props) => {
    return (
        <div className="card w-full  rounded-none">
            <figure>
                <Image
                    src={image.src}
                    alt={image.alt}
                    height={330}
                    width={330}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </figure>
            <div className="card-body text-left px-4">
                <h4 className="card-title font-bold text-2xl ">
                    {cardTitle}
                </h4>
                <p className='font-thin text-lg mb-6'>
                    {cardDescription}
                </p>
                <p className='font-thin text-lg mb-6'>
                    {cardAuthor}
                </p>
            </div>
        </div>
    )
}

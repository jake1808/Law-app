import React from 'react'
import Image from 'next/image'
import { GoLightBulb } from 'react-icons/go'

interface Props {
    image: {
        src: string,
        alt: string
    },
    cardPos: string
}

export const ImageCard = ({ image, cardPos }: Props) => {
    return (
        <div className='container  mb-6'>
            <div className='relative'>
                {!!image?.src &&
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={335}
                        height={279.16}
                    />}
                <div className={`container shadow-2xl w-[80%] z-100 flex flex-col absolute bg-white ${cardPos === 'right' ? 'right-0 top-48' : 'left-0 top-48'} p-6`} >
                    <GoLightBulb color='black' size={30} className='mb-4'/>
                      <p className='font-bold'>We&apos;ve made dreams a reality for 2M&#43; entrepreneurs.</p>  
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'


interface IconTypeProps {
    size: number,
    color:string
}

interface Props {
    image: {
        src: string,
        alt: string
    },
    cardText: string,
    icon: any,
    cardPos: string
}

export const ImageCard = ({ image, cardPos, cardText, icon }: Props) => {
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
                    {icon}
                    <p className='font-bold'>{cardText}</p>
                </div>
            </div>
        </div>
    )
}

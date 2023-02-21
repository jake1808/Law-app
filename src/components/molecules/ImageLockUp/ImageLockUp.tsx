import React, { ReactNode } from 'react'
import Image from 'next/image'

interface ImageLockUpProps {
  align?: 'left' | 'right';
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export const ImageLockUp = ({ align = 'left', image, children }: ImageLockUpProps) => {
  return (
    <div className="hidden container md:grid grid-cols-2 gap-x-6 py-6">
      <div className={`relative ${align === 'left' ? 'order-first' : 'order-last'}`}>
        {!!image?.src && <Image
          src={image.src}
          alt={image?.alt}
          style={{ objectFit: 'cover' }}
          fill
        />}
      </div>
      <div className={``}>
        {children}
      </div>
    </div>
  )
}

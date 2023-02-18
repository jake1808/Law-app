import Link from 'next/link'
import React from 'react'

interface Props{
    text:string
}

export const MenuLinkHeader = (props:Props) => {
    return (
        <Link href="#">
            <h3 className='font-bold text-xl text-white text-bold mb-2'>
                {props.text}
            </h3>
        </Link>
    )
}

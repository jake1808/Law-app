import Link from 'next/link'
import React from 'react'

interface Props{
    text:string
}

export const MenuLink = (props:Props) => {
  return (
    <li>
        <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
            {props.text}
        </Link>
    </li>
  )
}

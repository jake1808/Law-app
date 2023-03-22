import Link from 'next/link'
import React from 'react'

interface Props{
    text:string
}

export const LinkBtn = (props:Props) => {
  return (
    <Link href="#" className='btn   btn-accent rounded-full  my-6'>
    {props.text}
</Link>
  )
}

import Link from 'next/link'
import React from 'react'
import {RiAccountCircleLine} from 'react-icons/Ri'

export const SignInLinkButton = () => {
  return (
    <div>
      <Link href='#' className='btn btn-accent btn-outline mr-4 hidden'>
        Sign In
      </Link>
      <Link href="#" className=''>
      <RiAccountCircleLine color='white' size={35} />
      </Link>
    </div>
  )
}

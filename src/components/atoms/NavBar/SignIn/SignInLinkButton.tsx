import Link from 'next/link'
import React from 'react'
import { RiAccountCircleLine } from 'react-icons/Ri'

export const SignInLinkButton = () => {
  return (
    <div>
      <Link href="/auth/login" className='btn btn-accent btn-outline mr-4 hidden sm:inline rounded-full p-2'>
        Sign In
      </Link>
      <Link href="/auth/login" className='sm:hidden'>
        <RiAccountCircleLine color='white' size={35} />
      </Link>
    </div>
  )
}

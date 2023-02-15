import React from 'react'
import Link from 'next/link'

export const RegisterColumn = () => {
  return (
    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
    <Link href="#"><h3 className='font-bold text-xl text-white text-bold mb-2'>Register your business</h3></Link>
    <ul>
        <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
            Limited liability company (LLC)
        </Link>
    </ul>
    <ul>
        <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
            Corporation (C corp, S corp)
        </Link>
    </ul>
    <ul>
        <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
            Doing business as (DBA)
        </Link>
    </ul>
    <ul>
        <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
            Nonprofit
        </Link>
    </ul>
    <ul>
        <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
            Sole proprietorship
        </Link>
    </ul>
    <hr className='solid  w-[20%]' />
    <ul>
        <Link href="#" className='underline block p-3 text-gray-300 hover:text-white font-bold text-xl'>
            View all
        </Link>
    </ul>
    <ul>
        <Link href="#" className='block p-3 text-gray-300 hover:text-white font-bold text-xl btn btn-outline btn-accent'>
            Help me decide &#8594;
        </Link>
    </ul>
</ul>
  )
}

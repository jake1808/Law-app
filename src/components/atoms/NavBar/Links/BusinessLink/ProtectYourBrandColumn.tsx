import Link from 'next/link'
import React from 'react'

export const ProtectYourBrandColumn = () => {
    return (
        <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
            <Link href="#">
                <h3 className='font-bold text-xl text-white text-bold mb-2'>
                    Protect you brand
                </h3>
            </Link>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Trademark registration
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Trademark search
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Trademark monitoring
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Provisional patent
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Copyright
                </Link>
            </li>
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

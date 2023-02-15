import Link from 'next/link'
import React from 'react'

export const RunYourBusinessColumn = () => {
    return (
        <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
            <Link href="#" >
                <h3 className='font-bold text-xl text-white text-bold mb-2'>
                    Run your business
                </h3>
            </Link>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Registered Agent Services
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Annual report
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Contracts &amp; agreements
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Business licenses
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Foreign qualification
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    Corporate amendment
                </Link>
            </li>
            <li>
                <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                    LZ Tax Services
                </Link>
            </li>
            <hr className='solid  w-[20%]' />
            <ul>
                <Link href="#" className='underline block p-3 text-gray-300 hover:text-white font-bold text-xl'>
                    View all
                </Link>
            </ul>
        </ul>
    )
}

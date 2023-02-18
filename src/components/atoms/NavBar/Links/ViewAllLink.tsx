import Link from 'next/link'
import React from 'react'

export const ViewAllLink = () => {
    return (
        <li>
            <Link href="#" className='underline block p-3 text-gray-300 hover:text-white font-bold text-xl'>
                View all
            </Link>
        </li>
    )
}

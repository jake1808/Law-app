import Link from 'next/link'
import React from 'react'

export const HelpButtonLink = () => {
    return (
        <li>
            <Link href="#" className='block p-3 text-gray-300 hover:text-white font-bold text-xl btn btn-outline btn-accent'>
                Help me decide &#8594;
            </Link>
        </li>
    )
}

import Link from 'next/link'
import React from 'react'

export const HelpButtonLink = () => {
    return (
        <li>
            <Link href="#" className=' text-gray-300 hover:text-white font-bold text-lg btn btn-outline btn-white rounded-full mt-6 md:mt-0'>
                Help me decide &#8594;
            </Link>
        </li>
    )
}

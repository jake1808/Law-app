import Link from 'next/link'
import React from 'react'
import { BusinessLink } from '../molecules/NavBar/Links/BusinessLink'

export const NavBar = () => {
    return (
        <div className='navbar bg-primary'>
            <div className='navbar-start '>
                <Link href="/" className='text-white px-8'>
                    Law App
                </Link>
                <BusinessLink/>
            </div>
        </div>
    )
}

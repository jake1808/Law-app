
import { MenuButton } from '@/components/atoms/NavBar/DropdownMenu/MenuButton'

import { MenuLink } from '@/components/atoms/NavBar/Links/MenuLink'
import { MenuLinkHeader } from '@/components/atoms/NavBar/Links/MenuLinkHeader'
import { BiSearchAlt2 } from 'react-icons/bi'
import React from 'react'
import { BusinessSubMenu  } from '@/components/atoms/NavBar/DropdownMenu/BusinessSubMenu'




export const DropdownMenu = () => {
    return (
        <ul>
            <MenuButton />
            <div id='mega-dropdown-menu' className=' block px-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-secondary'>
                <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
                    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3 text-white'>
                        <li className='mb-4'>
                            <form action="" className='w-full flex justify-end items-center relative'>
                                <input type="text" className='pl-10 w-full rounded-full p-2 border-2 border-white bg-accent placeholder:text-white text-white' placeholder='Search products and articles' />
                                <BiSearchAlt2 color='white' size={20} className='pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3' />
                            </form>
                        </li>
                        <li>
                            <BusinessSubMenu/>
                        </li>
                        
                        <MenuLink text='Contact us' />
                        <MenuLink text='FAQs' />
                        <MenuLink text='Check my order status' />
                        <div className='my-6'></div>
                        <MenuLinkHeader text='Support' />
                        <div className='my-6'></div>
                        <p className='font-bold'>Sales hours</p>
                        <div className='my-6'></div>
                        <p>Mon-Fri 5 a.m.-7 p.m. PT</p>
                        <p>Mon-Fri 7 a.m.-4 p.m. PT</p>
                    </ul>
                </div>
            </div>
        </ul>
    )
}

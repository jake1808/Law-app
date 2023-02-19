
import { MenuButton } from '@/components/atoms/NavBar/DropdownMenu/MenuButton'
import { HelpButtonLink } from '@/components/atoms/NavBar/Links/HelpButtonLink'
import { MenuLink } from '@/components/atoms/NavBar/Links/MenuLink'
import { MenuLinkHeader } from '@/components/atoms/NavBar/Links/MenuLinkHeader'
import { ViewAllLink } from '@/components/atoms/NavBar/Links/ViewAllLink'
import React from 'react'



export const DropdownMenu = () => {
    return (
        <ul>
            <MenuButton />
            <div id='mega-dropdown-menu' className=' block p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-secondary'>
                <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
                    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3 text-white'>
                        <MenuLinkHeader text='Support' />
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

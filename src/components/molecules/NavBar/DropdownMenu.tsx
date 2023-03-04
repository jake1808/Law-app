
import { MenuButton } from '@/components/molecules/NavBar/DropdownMenu/MenuButton'


import { BiSearchAlt2 } from 'react-icons/bi'
import React from 'react'
import { BusinessSubMenu } from '@/components/molecules/NavBar/DropdownMenu/submenu/BusinessSubMenu'
import { PersonalSubMenu } from './DropdownMenu/submenu/PersonalSubMenu'
import Link from 'next/link'
import { SupportSubMenu } from './DropdownMenu/submenu/SupportSubMenu'




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
                            <BusinessSubMenu />
                        </li>
                        <li>
                            <PersonalSubMenu />
                        </li>
                        <li className='pl-4 mt-6 mb-6'>
                            <Link href='' className='text-xl font-medium '>For attorneys</Link>
                        </li>
                        <hr className='mt-6 mb-6' />
                        <li className='pl-4'>
                            <Link href='' className='text-xl font-medium  '>Resources</Link>
                        </li>
                        <li>
                            <SupportSubMenu/>
                        </li>
                    </ul>
                </div>
            </div>
        </ul>
    )
}

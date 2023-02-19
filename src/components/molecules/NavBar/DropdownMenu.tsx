
import { MenuButton } from '@/components/atoms/NavBar/DropdownMenu/MenuButton'
import React from 'react'



export const DropdownMenu = () => {
    return (
        <ul>
            <MenuButton />
            <div id='mega-dropdown-menu' className=' block p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-secondary'>
                <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
                    <div>
                        hi
                    </div>
                </div>
            </div>
        </ul>
    )
}

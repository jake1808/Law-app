'use client'
import { openDropDownMenu } from '@/lib/DropdownMenu/OpenDropDownMenu'
import React, {useEffect} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'


export const MenuButton = () => {

    const closeDropdownMenu = () => {
        var dropdownMenuVar: HTMLElement | null = document.querySelector(':root');
        var menuButton: HTMLElement | null = document.getElementById('menu-button');
        var closeButton: HTMLElement | null = document.getElementById('close-menu-button');
    
        menuButton?.classList.remove('hidden')
        closeButton?.classList.add('hidden')
        dropdownMenuVar?.style.setProperty('--displayValue', 'none');
    }

    useEffect(() => {
        window.addEventListener('onclick', closeDropdownMenu)

        return () => {
            window.removeEventListener('onclick', closeDropdownMenu)
        }
    }, []);

    return (
        <div>
            <button id='close-menu-button' className='hidden hover:bg-secondary rounded-md p-2' onClick={() => { closeDropdownMenu() }}>
                <AiOutlineClose color='white' size={35} />
            </button>

            <button id='menu-button' className='hover:bg-secondary rounded-md p-2' onClick={() => openDropDownMenu()}>
                <BiMenu color='white' size={35} />
            </button>
        </div>
    )
}

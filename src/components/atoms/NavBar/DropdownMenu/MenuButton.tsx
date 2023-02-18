'use client'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'


export const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        isOpen ?
            <button className='hover:bg-secondary rounded-md p-2' onClick={() => { setIsOpen(false) }}>
                <AiOutlineClose color='white' size={35} />
            </button>
            :
            <button className='hover:bg-secondary rounded-md p-2' onClick={() => setIsOpen(true)}>
                <BiMenu color='white' size={35} />
            </button>
    )
}

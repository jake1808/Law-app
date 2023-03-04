'use client'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'

export const PhoneButton = () => {
    return (

        <label htmlFor='phone-modal' className='mr-4 sm:hidden'>
            <BsTelephone color='white' size={25} />
        </label>
    )
}

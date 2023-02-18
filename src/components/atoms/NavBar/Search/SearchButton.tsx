'use client'
import openSearchBox from '@/lib/OpenSearchBox'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

export const SearchButton = () => {
    return (
        <button className='hover:bg-secondary rounded-md p-2' onClick={() => openSearchBox()}>
            <BiSearchAlt2 id='search-button' color='white' size={40} />
        </button>
    )
}

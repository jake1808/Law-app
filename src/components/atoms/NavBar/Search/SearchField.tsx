'use client'
import closeSearchBox from '@/lib/CloseSearchBox'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export const SearchField = () => {
    return (
        <div id='search-box' className='hidden flex justify-center items-center relative mr-4'>
            <input type='text' placeholder='Search' className='input input-bordered relative w-[75vw] h-[3.5rem] top-0 bottom-0  bg-white z-90' />
            <button
                className='btn btn-accent flex justify-center content-center  absolute right-0 top-0 bottom-0 h-full'
                onClick={() => closeSearchBox()}>
                <AiOutlineClose color='white' className='font-bold' />
            </button>
        </div>

    )
}

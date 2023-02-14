import Link from 'next/link';
import React from 'react'
import {RegisterColumn} from '@/components/atoms/BusinessLink/RegisterColumn'


export const BusinessLink = () => {
    return (
        <ul className='toggleable hover:bg-secondary text-white'>
            <input type="checkbox" value="selected" id="toggle-one" className='toggle-input' />
            <label htmlFor="toggle-one" className='block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-white'>Business</label>
            <div role='toggle' className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-secondary'>
                <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
                    <RegisterColumn/>
                </div>
            </div>

        </ul>
    );
}


import React from 'react'
import { RegisterColumn } from '@/components/molecules/NavBar/Menus/BusinessMenu/RegisterColumn'
import { RunYourBusinessColumn } from '@/components/molecules/NavBar/Menus/BusinessMenu/RunYourBusinessColumn';
import { ProtectYourBrandColumn } from '@/components/molecules/NavBar/Menus/BusinessMenu/ProtectYourBrandColumn';
import Link from 'next/link';


export const BusinessMenuMolecule = () => {
    return (
        <ul className='toggleable hover:bg-secondary hover:rounded-lg text-white'>
            <input type="checkbox" value="selected" id="toggle-one" className='toggle-input' />
            <label htmlFor="toggle-one" className='block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-white'>Business</label>
            <div role='toggle' className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-secondary'>
                <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
                    <RegisterColumn />
                    <RunYourBusinessColumn />
                    <ProtectYourBrandColumn />
                </div>
            </div>
        </ul>
    );
}




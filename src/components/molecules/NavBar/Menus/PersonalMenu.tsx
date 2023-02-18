import { WillsAndTrustsColumn } from '@/components/molecules/NavBar/Menus/PersonalMenu/WillsAndTrustsColumn'
import React from 'react'

export const PersonalMenuMolecule = () => {
  return (
    <ul className='toggleable hover:bg-secondary hover:rounded-lg text-white'>
      <input type="checkbox" value="selected" id="toggle-two" className='toggle-input' />
      <label htmlFor="toggle-two" className='block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-white'>Personal</label>
      <div role='toggle' className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-secondary'>
        <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
          <WillsAndTrustsColumn />
        </div>
      </div>
    </ul>
  )
}

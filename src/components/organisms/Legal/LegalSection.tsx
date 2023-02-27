import React from 'react'

import { ForYourBusiness } from '@/components/molecules/LegalMolecules/ForYourBusiness'
import { ForYouAndYourFamily } from '@/components/molecules/LegalMolecules/ForYouAndYourFamily'
import { ForYourIntellectualProperty } from '@/components/molecules/LegalMolecules/ForYourIntellectualProperty'

export const LegalSection = () => {
  return (
    <div className='flex flex-col w-full p-10 justify-center content-center mb-20'>
      <ForYourBusiness />
      <ForYouAndYourFamily />
      <ForYourIntellectualProperty />
      <div className="container ">
        <h3 className='font-bold text-2xl mb-4'>Meet our customers</h3>
      </div>
    </div>
  )
}

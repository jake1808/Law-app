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
    </div>
  )
}

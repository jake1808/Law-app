import { HelpButtonLink } from '@/components/atoms/NavBar/Links/HelpButtonLink'
import { MenuLink } from '@/components/atoms/NavBar/Links/MenuLink'
import { MenuLinkHeader } from '@/components/atoms/NavBar/Links/MenuLinkHeader'
import { ViewAllLink } from '@/components/atoms/NavBar/Links/ViewAllLink'

import React from 'react'

export const ProtectYourBrandColumn = () => {
    return (
        <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
            <MenuLinkHeader text="Protect your brand" />
            <MenuLink text='Trademark registration' />
            <MenuLink text='Trademark search' />
            <MenuLink text='Trademark monitoring' />
            <MenuLink text='Provisional patent' />
            <MenuLink text='Copyright' />
            <hr className='solid  w-[20%]' />
            <ViewAllLink />
            <HelpButtonLink />
        </ul>
    )
}



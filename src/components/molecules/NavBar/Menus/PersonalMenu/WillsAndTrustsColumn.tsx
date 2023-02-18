import { HelpButtonLink } from '@/components/atoms/NavBar/Links/HelpButtonLink'
import { MenuLink } from '@/components/atoms/NavBar/Links/MenuLink'
import { MenuLinkHeader } from '@/components/atoms/NavBar/Links/MenuLinkHeader'

import React from 'react'

export const WillsAndTrustsColumn = () => {
    return (
        <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
            <MenuLinkHeader text='Wills and trusts' />
            <MenuLink text='Estate Plan Bundle' />
            <MenuLink text='Last will &amp; testament' />
            <MenuLink text='Living trust' />
            <MenuLink text='Power of attorney' />
            <MenuLink text='Living will' />
            <HelpButtonLink />
        </ul>
    )
}

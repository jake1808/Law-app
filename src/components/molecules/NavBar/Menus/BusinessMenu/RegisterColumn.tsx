import React from 'react'

import { MenuLinkHeader } from '@/components/atoms/NavBar/Links/MenuLinkHeader'
import { MenuLink } from '@/components/atoms/NavBar/Links/MenuLink'
import { ViewAllLink } from '@/components/atoms/NavBar/Links/ViewAllLink'
import { HelpButtonLink } from '@/components/atoms/NavBar/Links/HelpButtonLink'

export const RegisterColumn = () => {
    return (
        <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
            <MenuLinkHeader text='Register your business' />
            <MenuLink text='Limited liability company &#40;LLC&#41;' />
            <MenuLink text='Corporation &#40;C corp, S corp&#41;' />
            <MenuLink text='Doing business as &#40;DBA&#41;' />
            <MenuLink text='Nonprofit' />
            <MenuLink text='Sole proprietorship' />
            <hr className='solid  w-[20%]' />
            <ViewAllLink />
            <HelpButtonLink />
        </ul>
    )
}

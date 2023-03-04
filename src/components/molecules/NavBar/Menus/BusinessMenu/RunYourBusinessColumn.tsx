import { MenuLink } from '@/components/atoms/NavBar/Links/MenuLink'
import { MenuLinkHeader } from '@/components/atoms/NavBar/Links/MenuLinkHeader'
import { ViewAllLink } from '@/components/atoms/NavBar/Links/ViewAllLink'

import React from 'react'

export const RunYourBusinessColumn = () => {
    return (
        <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
            <MenuLinkHeader text='Run your business' />
            <MenuLink text='Registered Agent Services' />
            <MenuLink text='Annual report' />
            <MenuLink text='Contracts &amp; agreements' />
            <MenuLink text='Business licenses' />
            <MenuLink text='Foreign qualification' />
            <MenuLink text='Corporate amendment' />
            <MenuLink text='LZ Tax Services' />
            <hr className='solid  w-[20%]' />
            <ViewAllLink />
        </ul>
    )
}

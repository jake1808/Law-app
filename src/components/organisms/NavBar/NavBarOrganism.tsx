import { NavLink } from '@/components/atoms/NavBar/Links/NavLink'
import { DropdownMenu } from '@/components/molecules/NavBar/DropdownMenu'
import { SearchMolecule } from '@/components/molecules/NavBar/SearchMolecule'
import { SignInMolecule } from '@/components/molecules/NavBar/SignInMolecule'
import Link from 'next/link'
import React from 'react'
import { BusinessMenuMolecule } from '../../molecules/NavBar/Menus/BusinessMenuMolecule'
import { PersonalMenuMolecule } from '../../molecules/NavBar/Menus/PersonalMenu'

export const NavBarOrganism = () => {
    return (
        <div className='navbar bg-primary absolute'>
            <div className='navbar-center'>
                <Link href="/" className='text-white px-8'>
                    Law App
                </Link>
                <BusinessMenuMolecule />
                <PersonalMenuMolecule />
                <NavLink text='For attorneys' />
                <NavLink text='Resources' />
            </div>
            <div className='navbar-end'>
                <SearchMolecule />
                <SignInMolecule />
                <DropdownMenu />
            </div>
        </div>
    )
}

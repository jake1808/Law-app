'use client'
import { NavLink } from '@/components/atoms/NavBar/Links/NavLink'
import { PhoneButton } from '@/components/atoms/NavBar/PhoneModel/PhoneButton'
import { DropdownMenu } from '@/components/molecules/NavBar/DropdownMenu'
// import { SearchMolecule } from '@/components/molecules/NavBar/SearchMolecule'
import { SignInMolecule } from '@/components/molecules/NavBar/SignInMolecule'
import Link from 'next/link'

import { BusinessMenuMolecule } from '../../molecules/NavBar/Menus/BusinessMenuMolecule'
import { PersonalMenuMolecule } from '../../molecules/NavBar/Menus/PersonalMenu'

export const NavBarOrganism = () => {

    return (
        <div id='top' className='navbar bg-primary lg:absolute'>
            <div className='navbar-start'>
                <Link href="/" className='text-white px-8'>
                    Law Concierge Africa
                </Link>
                <div className='hidden lg:navbar-center'>
                    <BusinessMenuMolecule />
                    <PersonalMenuMolecule />
                    <NavLink text='For attorneys' />
                    <NavLink text='Resources' />
                </div>
            </div>
            <div className='navbar-end '>
                {/* TODO: FIX SEARCH POPUP */}
                {/* <SearchMolecule /> */}
                <PhoneButton />
                <SignInMolecule />
                <DropdownMenu />
            </div>
        </div>
    )
}

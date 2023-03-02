
import { SearchButton } from '@/components/atoms/NavBar/Search/SearchButton'
import { SearchField } from '@/components/atoms/NavBar/Search/SearchField'
import React from 'react'


export const SearchMolecule = () => {



    return (
        <div className='hidden sm:flex '>
            <SearchButton />
            <SearchField />
        </div>
    )
}


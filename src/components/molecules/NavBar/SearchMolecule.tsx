
import { SearchButton } from '@/components/atoms/NavBar/Search/SearchButton'
import { SearchField } from '@/components/atoms/NavBar/Search/SearchField'
import openSearchBox from '@/lib/OpenSearchBox'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

export const SearchMolecule = () => {



    return (
        <div className='hidden sm:flex '>
            <SearchButton />
            <SearchField />
        </div>
    )
}


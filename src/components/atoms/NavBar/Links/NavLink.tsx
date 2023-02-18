import Link from 'next/link'
import React from 'react'

interface Props {
    text: string
}

export const NavLink = (props: Props) => {
    return (
        <Link href="#">
            <label className='block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-white hover:bg-secondary hover:rounded-lg'>
                {props.text}
            </label>
        </Link>
    )
}

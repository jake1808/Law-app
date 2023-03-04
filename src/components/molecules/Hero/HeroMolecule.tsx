/* eslint-disable @next/next/no-img-element */
import { LinkBtn } from '@/components/atoms/NavBar/Hero/Linkbtn/LinkBtn'

import React from 'react'

export const HeroMolecule = () => {
    return (
        <div className='hero min-h-screen bg-neutral '>
            <div className='hero-content flex-col-reverse lg:flex-row-reverse'>
                <img
                    className='max-w-sm rounded-lg shadow-2xl '
                    src='https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
                    alt='person'
                />
                <div>
                    <h1 className='text-5xl font-bold'>
                        Zambian<br /> Legal Help in Zambia
                    </h1>
                    <p className='py-6 font-bold text-3xl'>Get the legal help you need, with our DIY services or attorney advice. Either way, we&apos;ve got your back.</p>
                    <div className='flex flex-col'>
                        <LinkBtn text='Business Information' />
                        <LinkBtn text='Wills and trusts' />
                        <LinkBtn text='Intellectual property' />
                    </div>
                </div>
            </div>
        </div>
    )
}




import Link from 'next/link'
import React from 'react'

export const Stats = () => {
    return (
        <div className='p-10 flex flex-col text-left content-start w-full'>
            <div className='container mb-16'>
                <h3 className='font-bold text-4xl mb-4 sm:text-5xl sm:font-extrabold'>2 million&#43;</h3>
                <h4 className='font-semibold text-2xl mb-5 sm:text-3xl sm:font-bold'>businesses</h4>
                <p className='text-xl'>Helping entrepreneurs turn ideas into businesses over 2 million times.</p>
            </div>
            <div className='container mb-16'>
                <h3 className='font-bold text-4xl mb-4 sm:text-5xl sm:font-extrabold'>3.5  million&#43;</h3>
                <h4 className='font-semibold text-2xl mb-5 sm:text-3xl sm:font-bold'>estate planning docs</h4>
                <p className='text-xl'>Protecting loved ones by helping customers create 6.5  million&#43; estate planning documents.</p>
            </div>
            <div className='container mb-20'>
                <h3 className='font-bold text-4xl mb-4 sm:text-5xl sm:font-extrabold'>650&#44;000&#43;</h3>
                <h4 className='font-semibold text-2xl mb-5 sm:text-3xl sm:font-bold'>consultations</h4>
                <p className='text-xl'>Providing access to our independent network of attorneys over 650&#44;000 times.</p>
            </div>
            <div className='container mb-16'>
                <h3 className='font-bold text-4xl mb-4 sm:text-5xl sm:font-extrabold'>Why choose us</h3>
                <h4 className='font-bold text-2xl mb-5 '>We do right by you</h4>
                <p className='text-xl mb-5  '>We will refund our free within the first 60 days if you&apos;re unhappy with our services. <br />
                    <Link href='#' className='link font-bold'> Learn more</Link>
                </p>
                <h4 className='font-bold text-2xl mb-5 '>We&apos;ve got you covered in all 10 provinces</h4>
                <p className='text-xl mb-8'>Have peace of mind knowing our docs have been legally recognized in every province&#8211;and you&apos;ll never need to leave home to work with a lawyer.
                </p>
                <h4 className='font-bold text-2xl mb-5 '>Flat-rate fees</h4>
                <p className='text-xl mb-6'>No hourly charges. No surprises. Really.</p>
                <hr className='divide' />
            </div>
        </div>
    )
}

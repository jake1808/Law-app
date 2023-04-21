import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col text-center'>
                <p className='text-black font-bold'>Please verify your email</p>
                <Link href='/auth/login' className='mt-2'>Go to login</Link>
            </div>
        </div>
    )
}

export default page
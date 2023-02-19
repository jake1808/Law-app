import React from 'react'

export const NewsLetterMolecule = () => {
    return (
        <div className='flex flex-col justify-center my-6'>
            <div className='w-full md:w-96 relative mr-4'>
                <input type="text" placeholder="name@email.com" className="input input-bordered w-full max-w-xs" />
                <button
                    className='btn btn-accent flex justify-center content-center absolute right-0 top-0 h-full '
                >
                    Sign up!
                </button>
            </div>
        </div>
    )
}

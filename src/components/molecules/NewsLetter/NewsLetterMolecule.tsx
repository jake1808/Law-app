import React from 'react'

export const NewsLetterMolecule = () => {
    return (
        <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-accent py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="name@email.com" aria-label="Email"/>
                    <button className="flex-shrink-0 bg-transparent hover:bg-teal-700 border-none hover:border-teal-700  border-4 text-black font-bold text-lg py-1 px-2 rounded" type="button">
                        Sign Up
                    </button>
                   
            </div>
        </form>
    )
}

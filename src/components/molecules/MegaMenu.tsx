import Link from 'next/link';
import React from 'react'

export const MegaMenu = () => {
    return (
        <ul className='toggleable hover:bg-secondary text-white'>
            <input type="checkbox" value="selected" id="toggle-one" className='toggle-input' />
            <label htmlFor="toggle-one" className='block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-white'>Business</label>
            <div role='toggle' className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-secondary'>
                <div className='container mx-auto w-full flex flex-wrap justify-between mx-2'>
                    <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3'>
                        <Link href="#"><h3 className='font-bold text-xl text-white text-bold mb-2'>Register your business</h3></Link>
                        <ul>
                            <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                                Limited liability company (LLC)
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                                Corporation (C corp, S corp)
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                                Doing business as (DBA)
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                                Nonprofit
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#" className='block p-3 text-gray-300 hover:text-white'>
                                Sole proprietorship
                            </Link>
                        </ul>
                        <hr className='solid  w-[20%]' />
                        <ul>
                            <Link href="#" className='block p-3 text-gray-300 hover:text-white font-bold text-xl'>
                                View all
                            </Link>
                        </ul>
                        <ul>
                            <Link href="#" className='block p-3 text-gray-300 hover:text-white font-bold text-xl btn-ghost'>
                                Help me decide &#8594;
                            </Link>
                        </ul>
                    </ul>
                </div>
            </div>

        </ul>
    );
}

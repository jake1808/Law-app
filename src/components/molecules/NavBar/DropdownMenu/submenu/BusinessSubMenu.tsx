import Link from 'next/link'
import React from 'react'
import { HelpButtonLink } from '../../../../atoms/NavBar/Links/HelpButtonLink'
import { RxCaretRight } from 'react-icons/rx'
export const BusinessSubMenu = () => {
    return (
        <div className="collapse collapse-plus  w-full">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Business
            </div>
            <div className="collapse-content ">
                <ul>
                    <li>
                        <div className="collapse  w-full">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium ">
                                Register your business
                            </div>
                            <div className="collapse-content">
                                <ul className=''>
                                    <li className='mb-6 pl-4'><Link href=''>Limited liability company (LLC)</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Corporation (C corp, S corp)</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Doing business as (DBA)</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Nonprofit</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Press</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Sole proprietorship</Link></li>
                                    <hr className='w-[20%] mb-6 ml-4' />
                                    <li><Link href='' className='font-bold underline pl-4 mb-6'>View all</Link></li>
                                    <HelpButtonLink />
                                    <li><hr className=' mt-8' /></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapse  w-full">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium ">
                                Run your business
                            </div>
                            <div className="collapse-content">
                                <ul className=''>
                                    <li className='mb-6 pl-4'><Link href=''>Registered Agent Service</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Annual report</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Contracts & agreements</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Business licenses</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Foreign qualification</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Corporate amendment</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>LZ Tax Services</Link></li>
                                    <hr className='w-[20%] mb-6 ml-4' />
                                    <li><Link href='' className='font-bold underline pl-4 mb-6'>View all</Link></li>
                                    <hr className=' mt-8' />
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapse  w-full">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium ">
                                Protect your brand
                            </div>
                            <div className="collapse-content">
                                <ul className=''>
                                    <li className='mb-6 pl-4'><Link href=''>Trademark registration</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Trademark search</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Trademark monitoring</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Provisional patent</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Copyright</Link></li>
                                    <hr className='w-[20%] mb-6 ml-4' />
                                    <li><Link href='' className='font-bold underline pl-4 mb-6'>View all</Link></li>
                                    <HelpButtonLink />
                                    <hr className=' mt-8' />
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href='' className='text-lg font-semibold flex underline mt-6'>See all business services <RxCaretRight color='white' size={30} className='' /></Link>
                    </li>

                    <hr className=' mt-8' />
                </ul>
            </div>
        </div>
    )
}

import Link from 'next/link'
import React from 'react'
import { HelpButtonLink } from '../../../../atoms/NavBar/Links/HelpButtonLink'
import { RxCaretRight } from 'react-icons/rx'
export const PersonalSubMenu = () => {
    return (
        <div className="collapse collapse-plus  w-full">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                <Link href=''>
                Personal
                </Link>
            </div>
            <div className="collapse-content ">
                <ul>
                    <li>
                        <div className="collapse  w-full">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium ">
                               <Link href=''>
                                Wills and trusts
                                </Link>
                            </div>
                            <div className="collapse-content">
                                <ul className=''>
                                    <li className='mb-6 pl-4'><Link href=''>Estate Plan Bundle</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Last will & testament</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Living trust</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Power of attorney</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Living will</Link></li>
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
                                <Link href=''>
                                Family
                                </Link>
                            </div>
                            <div className="collapse-content">
                                <ul className=''>
                                    <li className='mb-6 pl-4'><Link href=''>Divorce</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Name change</Link></li>
                                    <hr className=' mt-8' />
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapse  w-full">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium ">
                                <Link href=''>
                                Real estate
                                </Link>
                            </div>
                            <div className="collapse-content">
                                <ul className=''>
                                    <li className='mb-6 pl-4'><Link href=''>Residential lease</Link></li>
                                    <li className='mb-6 pl-4'><Link href=''>Property deed transfer</Link></li>
                                    <hr className=' mt-8' />
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href='' className='text-lg font-semibold flex underline mt-6'>See all personal services<RxCaretRight color='white' size={30} className='' /></Link>
                    </li>

                    <hr className=' mt-8' />
                </ul>
            </div>
        </div>
    )
}

import Link from 'next/link'
import React from 'react'

export const SupportSubMenu = () => {
    return (
        <div className="collapse collapse-plus  w-full">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                <Link href=''>
                    Support
                </Link>
            </div>

            <li className="collapse-content ">
                <ul>

                    <li className='mb-6 pl-4'><Link href=''>Contact us</Link></li>
                    <li className='mb-6 pl-4'><Link href=''>FAQs</Link></li>
                    <li className='mb-6 pl-4'><Link href=''>Check my order status</Link></li>
             
                </ul>

            </li>
        </div> 
           )
                           
}

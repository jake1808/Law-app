import Link from 'next/link'
import React from 'react'
import { SiWhatsapp } from 'react-icons/si'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl'

export const MobileFooter = () => {
  return (
    <div className="footer mb-6 p-4 w-full">
    <div className="collapse collapse-arrow border-y border-base-300 w-full">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Company
      </div>
      <div className="collapse-content">
        <ul>
          <li className='mb-6'><Link href=''>About</Link></li>
          <li className='mb-6'><Link href=''>Careers</Link></li>
          <li className='mb-6'><Link href=''>Contact</Link></li>
          <li className='mb-6'><Link href=''>Investors</Link></li>
          <li className='mb-6'><Link href=''>Press</Link></li>
          <li className='mb-6'><Link href=''>Affiliates</Link></li>
          <li className='mb-6'><Link href=''>Social Impact</Link></li>
        </ul>
      </div>
    </div>
    <div className="collapse collapse-arrow border-y border-base-300 w-full">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Support
      </div>
      <div className="collapse-content">
        <ul>
          <li className='mb-6'><Link href=''>Order Status</Link></li>
          <li className='mb-6'><Link href=''>Customer Care</Link></li>
          <li className='mb-6'><Link href=''>Speak with an Attorney</Link></li>
          <li className='mb-6'><Link href=''>Join our Attorney Network</Link></li>
          <li className='mb-6'><Link href=''>Security</Link></li>
          <li className='mb-6'><Link href=''>See all services</Link></li>
        </ul>
      </div>
    </div>
    <div className="collapse collapse-arrow border-y border-base-300 w-full">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Learn more
      </div>
      <div className="collapse-content">
        <ul>
          <li className='mb-6'><Link href=''>Legal Help Articles</Link></li>
          <li className='mb-6'><Link href=''>Legal Forms</Link></li>
        </ul>
      </div>
    </div>
    <div className="container flex flex-col justify-center items-center text-center">
      <h2 className='text-xl font-bold mb-6'>Law App</h2>
      <div className="flex">
        <a className="btn btn-sm btn-ghost" href='#'><SlSocialFacebook size={30} /></a>
        <a className="btn btn-sm btn-ghost" href='#'><SlSocialInstagram size={30} /></a>
        <a className="btn btn-sm btn-ghost" href='#'><SlSocialLinkedin size={30} /></a>
        <a className="btn btn-sm btn-ghost" href='#'><SlSocialTwitter size={30} /></a>
        <a className="btn btn-sm btn-ghost" href='#'><SiWhatsapp size={30} /></a>
      </div>
    </div>
  </div>
  )
}

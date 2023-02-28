import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl'
import { SiWhatsapp } from 'react-icons/si'
import { RxCaretUp } from 'react-icons/rx'
import { NewsLetterMolecule } from '@/components/molecules/NewsLetter/NewsLetterMolecule'
import Link from 'next/link'


const FooterOrganism = () => {
  return (
    <footer className='flex flex-col  bg-neutral relative'>
      <div className="container flex absolute top-[-30px] w-full justify-center items-center ">
        <a href='#top' className='flex flex-col btn btn-circle  btn-accent  btn-lg  '>
          <RxCaretUp color='' size={30} />
          <p>Top</p>
        </a>
      </div>
      <div className='flex flex-col items-center mb-8 p-10 mt-8'>
        <h1 className='text-center text-xl font-bold p-12'>Get helpful tips and info from our newsletter!</h1>
        <NewsLetterMolecule />
        <Link href='' className='mt-10'>
          See the latest issue
        </Link>
      </div>
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
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialFacebook size={30}/></a>
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialInstagram size={30}/></a>
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialLinkedin size={30}/></a>
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialTwitter size={30}/></a>
            <a className="btn btn-sm btn-ghost" href='#'><SiWhatsapp size={30}/></a>
          </div>
        </div>
      </div>
      <div className='footer mb-6 p-10 hidden'>
        <ul>
          <li><span className="footer-title">Services</span></li>
          <li><a className="link link-hover">Branding</a></li>
          <li><a className="link link-hover">Design</a></li>
          <li><a className="link link-hover">Marketing</a></li>
          <li><a className="link link-hover">Advertisement</a></li>
        </ul>
        <ul>
          <li><span className="footer-title">Company</span></li>
          <li><a className="link link-hover">About us</a></li>
          <li><a className="link link-hover">Contact</a></li>
          <li><a className="link link-hover">Jobs</a></li>
          <li><a className="link link-hover">Press kit</a></li>
        </ul>
        <ul>
          <li><span className="footer-title">Legal</span></li>
          <li><a className="link link-hover">Terms of use</a></li>
          <li><a className="link link-hover">Privacy policy</a></li>
          <li><a className="link link-hover">Cookie policy</a></li>
        </ul>
        <div>
          {/* TODO:Change name */}
          <h2 className='text-xl font-bold'>Law App</h2>
          <div className="flex">
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialFacebook /></a>
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialInstagram /></a>
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialLinkedin /></a>
            <a className="btn btn-sm btn-ghost" href='#'><SlSocialTwitter /></a>
            <a className="btn btn-sm btn-ghost" href='#'><SiWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className='p-10'>
        <p className='text-sm mb-3'>&#169; LawApp.com, Inc. All rights reserved.</p>
        <p className='text-sm mb-6' >LawApp provides access to independent attorneys and self-service tools. We are not a law firm and do not provide legal advice. Use of our products and services are governed by our <a className="link" href="#">Terms of Use</a> and <a className="link" href="#">Privacy Policy</a>.</p>
      </div>
    </footer>

  )
}

export default FooterOrganism
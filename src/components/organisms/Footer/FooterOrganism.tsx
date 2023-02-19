import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl'
import { SiWhatsapp } from 'react-icons/si'
import { NewsLetterMolecule } from '@/components/molecules/NewsLetter/NewsLetterMolecule'

const FooterOrganism = () => {
    return (
        <footer className='flex flex-col p-10 bg-neutral'>
          <div className='flex flex-col items-center mb-8'>
            <h1 className='text-center text-xl font-bold'>Get helpful tips and info from our newsletter!</h1>
            <NewsLetterMolecule />
          </div>
          <div className='footer mb-6'>
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
          <div>
            <p className='text-sm mb-3'>&#169; LawApp.com, Inc. All rights reserved.</p>
            <p className='text-sm' >LawApp provides access to independent attorneys and self-service tools. We are not a law firm and do not provide legal advice. Use of our products and services are governed by our <a className="link" href="#">Terms of Use</a> and <a className="link" href="#">Privacy Policy</a>.</p>
          </div>
        </footer>

    )
}

export default FooterOrganism
'use client'
import Link from 'next/link'
import React from 'react'


export const PhoneModelMolecule = () => {
    return (
        <div>
            <input type="checkbox" id="phone-modal" className="modal-toggle" />
            <label htmlFor="phone-modal" className="modal modal-bottom cursor-pointer">
                <label className="modal-box relative" htmlFor="phone-modal">
                    <h3 className="text-lg font-bold text-center">Need help?</h3>
                    <label htmlFor="phone-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="py-4">We&apos;re available Mon-Fri 5 a.m. to 7 p.m. CAT and weekends 7 a.m. to 4 p.m. CAT.</p>
                    <div className='modal-action flex flex-col '>
                        <label htmlFor="phone-modal" className='btn btn-primary mb-4'>
                            Call sales
                        </label>
                        <label htmlFor="phone-modal" className='btn btn-primary btn-outline'>
                            See our FAQs
                        </label>
                    </div>
                </label>
            </label>
        </div>
    )
}

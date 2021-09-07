import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="bg-blue-700">
                {/* footer */}
                <div className="container flex flex-col md:flex-row items-center mx-auto justify-between text-white py-10">
                    <div className="mb-10 md:mb-0">
                        <div className="flex  items-center">
                            {/* logo */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="text-4xl font-bold text-gray-800">LOGO</h1>
                        </div>
                        <p className="text-sm">Leave smart. Get it automated.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-x-5 space-y-3 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <span className="border-blue-500 border-2 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <div className="font-semibold">
                                <div>Level 1, 100 Moorhouse </div>
                                <div>Avenue, Christchurch, 8011 , </div>
                                <div>New Zealand.</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="border-blue-500 border-2 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <h5 className="font-semibold">support@horizonlinelimited.com</h5>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-800">
                    <div className="container mx-auto text-white flex p-3 items-center justify-between">
                        <div className="text-center">Copyrights © 2020 Company Name. All Rights Reserved</div>
                        <div className="md:flex items-center space-x-3 font-semibold hidden">
                            <Link to="/">Homepage</Link>
                            <Link to="/about-us">About us</Link>
                            <Link to="/terms-of-services">Terms of services</Link>
                            <Link to="/contact">Contact us</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

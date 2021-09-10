import { CubeIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className=" bg-gradient-to-r from-indigo-600 to-blue-600">
                {/* footer */}
                <div className="container flex flex-col md:flex-row items-center mx-auto justify-between text-white py-10 md:px-10">
                    <div className="mb-10 md:mb-0">
                        <div className="flex  items-center">
                            {/* logo */}
                              {/*logo  */}
                    <CubeIcon className="h-10 w-10"/>
                   
                   <h1 className="text-2xl font-bold text-white uppercase">matip digital</h1>
                        </div>
                        <p className="text-sm">Leave smart. Get it automated.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-x-5 space-y-3 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <span className="border-blue-500 border-2 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <div className="font-semibold text-sm">
                                <div> 1625 N Shoreline Blvd, </div>
                                <div> Mountain View, CA 94043, </div>
                                <div>USA.</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="border-blue-500 border-2 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <h5 className="font-semibold text-sm">support@matipdigital.com</h5>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-800  md:px-10">
                    <div className="container mx-auto text-white flex p-3 items-center justify-between">
                        <div className="text-center">Copyrights © 2020 Matip Digital. All Rights Reserved</div>
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

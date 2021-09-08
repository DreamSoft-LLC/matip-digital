import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuAlt3Icon, UserIcon, XIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { AuthConsumer } from '../contexts/auth'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ history, transparent_null }) {

    const [toggle, setToggle] = useState(false)
    const { path } = useRouteMatch()
    const [email, setEmail] = useState('')

    const { isAuth, setIsAuth,isAuthToggle, setIsAuthToggle } = AuthConsumer()


    useEffect(() => {
        setEmail(localStorage.getItem('name'))
        setToggle(false)
    }, [])

    const logout = () => {
        setIsAuth(false);
        localStorage.clear()
    }

    return (
        <>
            <div className={`flex items-center justify-between  ${transparent_null ? "border-b border-blue-500 mx-10" : "bg-black bg-opacity-20  px-10"} text-white font-semibold space-x-5 py-5 md:py-9`} style={{ zIndex: 700 }}>
                <Link to="/" className="flex items-center justify-center space-x-2">
                    {/*logo  */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="text-2xl font-bold text-white">LOGO</h1>
                </Link>
                <div className="hidden md:flex items-center space-x-5">
                    <Link to="/">Homepage</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact us</Link>
                    {!isAuth ? <> <Link to="/login" className="">Login</Link>
                        <Link to="/signup" className="px-7 py-2 bg-blue-500 text-blue-50 rounded">Sign up</Link>
                    </> :
                        <>
                            <div className="border rounded-full p-2 cursor-pointer" onClick={e => setIsAuthToggle(prev => !prev)}>
                                <UserIcon className="h-6 w-6" />
                            </div>
                            <div className={`${!isAuthToggle ? 'hidden' : ''} absolute inset-0`} onClick={e => setIsAuthToggle(false)}></div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ left: '200vw' }} transition={{ duration: 2 }} className={`${!isAuthToggle ? 'hidden' : ''} absolute  w-60 bg-white text-gray-700 text-sm flex flex-col right-9 top-20 rounded mt-2 p-3 space-y-3`}>
                                <h1> <span className="text-blue-500 mr-1">Hi</span> <span className="font-semibold">{email}</span></h1>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                                <Link to="/dashboard/earnings">
                                    Earnings
                                </Link>
                                <Link to="/dashboard/referals">
                                    Referals
                                </Link>
                                <Link to="/dashboard/account">
                                    Account
                                </Link>
                                <button className="flex-1 px-3 py-2 text-center text-green-500 bg-green-50 rounded-md">Withdraw</button>
                                <button onClick={e => logout()} className="flex-1 px-3 py-2 text-center text-blue-500 bg-blue-50 rounded-md">Logout</button>
                            </motion.div>
                        </>}
                </div>
                <div className="md:hidden">
                    <MenuAlt3Icon className="w-8 h-8 text-white cursor-pointer" onClick={e => setToggle(!toggle)} />
                </div>
            </div>

            <div className={`${toggle ? '' : 'hidden '} flex absolute  w-screen h-full bg-black bg-opacity-40 top-0 left-0`}
                style={{
                    transition: "all 0.3s ease- out",
                    zIndex: 900
                }}
            >
                <div className="relative w-9/12 bg-indigo-600 h-full flex flex-col space-y-5 text-white p-3">
                    <Link to="/">Homepage</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact us</Link>
                    {isAuth ? <>
                    <div className="border"></div>

                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                        <Link to="/dashboard/earnings">
                            Earnings
                        </Link>
                        <Link to="/dashboard/referals">
                            Referals
                        </Link>
                        <Link to="/dashboard/account">
                            Account
                        </Link>
                        <div className="w-full flex items-center space-x-2">

                        <button className="flex-1 px-3 py-2 text-center text-green-50 bg-green-500 rounded-md">Withdraw</button>
                        <button onClick={e => logout()} className="flex-1 px-3 py-2 text-center text-blue-500 bg-blue-50 rounded-md">Logout</button>
                        </div>
                    </> : <><div className="w-full flex items-center space-x-2">
                        <Link to="/login" className="flex-1 px-3 py-2 text-center text-blue-500 bg-blue-50 rounded-md">Login</Link>
                        <Link to="/signup" className="flex-1 px-3 py-2 text-center bg-blue-500 text-blue-50 rounded-md">Sign up</Link>

                    </div></>}
                    
                </div>
                <div className="relative h-full p-2">
                    <XIcon className="w-10 h-10 text-white" onClick={e => setToggle(!toggle)} />
                </div>
            </div>
        </>
    )
}



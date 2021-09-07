import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { AuthConsumer } from '../contexts/auth'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ history }) {

    const [toggle, setToggle] = useState(false)
    const { path } = useRouteMatch()

    const {isAuth } = AuthConsumer()

    return (
        <>
            <div className="flex items-center container shadow md:shadow-none bg-white mx-auto px-3 md:px-0  md:py-10 border-b">
                <Link to="/" className="flex items-center justify-center space-x-2">
                    {/*logo  */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="text-4xl font-bold text-gray-800">LOGO</h1>
                </Link>
                <div className="flex-1 items-center space-x-2 md:hidden" ></div>
                <div className="hidden md:flex flex-1  items-center px-10 justify-center space-x-8">
                    {/* location */}
                    {!isAuth ? <><div className="flex items-center space-x-2">
                        <span className="border-blue-500 border-2 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <h5 className="font-semibold">support@horizonlinelimited.com</h5>
                        </div> </> : <> </>}
                </div>
                {
                    !isAuth ? <div className="space-x-2 hidden md:flex">
                        {/* login & singup btn */}
                        <button onClick={e => history.push('/login')} className="bg-blue-500 rounded-md w-40 py-3 font-semibold text-white">
                            Login
                        </button>
                        <button onClick={e => history.push('/signup')} className="bg-blue-500 rounded-md w-40 py-3 font-semibold text-white">
                            Signup
                        </button>

                    </div> : <div className="space-x-2 hidden md:flex">
                        {/* login & singup btn */}
                        <Accoutbtn />
                        <button onClick={e => history.push('/signup')} className="bg-red-500 rounded-md w-40 py-3 font-semibold text-white">
                            Logout
                        </button>

                    </div>
                }


                <button onClick={e => setToggle(prev=>!prev)} className="md:hidden py-3 font-semibold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {toggle && <motion.div exit={{y:"-100vh",height:0}} initial={{y:"-100vh",height:0}} animate={{y:1,height:1}}  transition={{ ease: "easeOut", duration: 1 }} className=" w-full bg-blue-600 -mt-1 flex-1 z-10 h-full pl-3 py-5">
                <div className="flex flex-col space-y-3 font-semibold text-white">
                    <Link to="/dashboard" className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span>Dashboard</span>
                    </Link>
                    <button className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        <span>
                            Withdraw
                        </span>
                    </button>
                    <Link to={"/dashboard/earnings"} className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Earnings</span>
                    </Link>
                    <Link to={"/dashboard/referals"} className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Referal</span>
                    </Link>
                    <Link to='/about-us' className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                        <span>About us</span>
                    </Link>
                    <Link to='/terms' className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Terms</span>
                    </Link>
                    <Link to='/contact' className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <span>Contact</span>
                    </Link>
                    <Link className="bg-white p-2 mr-3 rounded text-blue-600 text-center">Logout</Link>
                </div>

            </motion.div>}
        </>
    )
}



function Accoutbtn() {

    const { path } = useRouteMatch()

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="bg-blue-500  text-white py-3 inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 w-40 font-semibold text-sm hover:bg-gray-50 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Account
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={path}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    dashboard
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={path + "/earnings"}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Earnings
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={path + "/referals"}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Referals
                                </Link>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
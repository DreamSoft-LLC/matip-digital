import React, { useState } from 'react'
import ExchangeCard from '../components/exchangecard'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { motion } from "framer-motion"
import { API_SERVER } from '../config'
import axios from 'axios'
import { AuthConsumer } from '../contexts/auth'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Animate from '../components/animate/animate'



export const PLANS = [
    {
        id:1,
        name: 'Basic',
        discretion: 'All the basics for businesses that are just getting started.',
        price: {
            lifetime: 100,
            monthly: 29,
            annually: 29 * 12 - 199,
        },
        features: ['$2 Daily', 'Your dashboard'],
    },
    {
        id:2,
        name: 'Standard',
        discretion: 'Better for growing businesses that want more customers.',
        price: {
            lifetime: 200,
            monthly: 59,
            annually: 59 * 12 - 100,
        },
        features: ['$4 Daily', 'Your dashboard', 'Components included', 'Advanced charts'],
    },
    {
        id:3,
        name: 'Classic',
        discretion: 'Advanced features for pros who need more customization.',
        price: {
            lifetime: 500,
            monthly: 139,
            annually: 139 * 12 - 100,
        },
        features: ['$10 Daily', 'Your dashboard', '+300 Components', 'Chat support'],
    },
    {
        id:4,
        name: 'Premiun',
        discretion: 'Advanced features for pros who need more customization.',
        price: {
            lifetime: 1000,
            monthly: 139,
            annually: 139 * 12 - 100,
        },
        features: ['$20 Daily', 'Your dashboard', '+300 Components', 'Chat support'],
    },
    {
        id:5,
        name: 'Ultra',
        discretion: 'Advanced features for pros who need more customization.',
        price: {
            lifetime: 2000,
            monthly: 139,
            annually: 139 * 12 - 100,
        },
        features: ['$40 Daily', 'Your dashboard', '+300 Components', 'Chat support'],
    },
]

export default function Payment({ history }) {
    const [selected, setSelected] = useState();
    const [loading, setLoading] = useState(false)
    const { isAuth } = AuthConsumer()
    function purchase(plan, index) {
        if (!isAuth) {
            history.push('/signup');
            return;
        }
        setSelected(index)
        setLoading(true)
        const session_key = localStorage.getItem('session-token')
        axios.post(API_SERVER + '/payment', { ...plan}, {
            headers: { 'auth-token': session_key }
        }).then(res => { setLoading(true); window.location.href = res.data.charge.hosted_url }).catch(err => { console.log(err); setLoading(true) })
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Animate />
            <div className=" bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col" style={{ height: '60vh' }}>
                <Navbar transparent_null history={history} />
                <div className="flex-1 flex flex-col md:flex-row items-center md:justify-between mx-10 ">
                    <div className=" flex flex-col justify-center  text-white space-y-3 md:w-1/2">
                        <p className="text-3xl lg:text-5xl font-extrabold">Packages</p>
                        <p className="text-xl font-semibold">You could try refreshing the page (just be sure to check the URL for errors) or head back to our homepage.</p>
                    </div>
                    <div className="text-white space-y-2 pt-5">
                        <label className="font-semibold">Currency</label>
                        <div className="flex-1 w-56 rounded-md flex justify-between items-center text-white bg-blue-700 px-5 py-2">
                            <span>United State (USD)</span>
                            <ChevronDownIcon className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex-1 py-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ left: '200vw' }} transition={{ duration: 2 }} className="container mx-auto">

                    <SelectPlan loading={loading} selected={selected} setSelected={purchase} />

                </motion.div>
            </div>

            <ExchangeCard wide />
            <Footer />
        </div>
    )
}





function SelectPlan({ setSelected, loading, selected }) {



    return (
        <div className="mx-5">
            <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
                {
                    PLANS.map((data, index) => {
                        return <>
                            <section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md border">

                                <div class="flex-shrink-0">
                                    <span
                                        class="text-4xl font-medium tracking-tight "
                                    >${data.price.lifetime}</span>
                                    <span class="text-gray-400"> /Lifetime</span>
                                </div>


                                <div class="flex-shrink-0 pb-6 space-y-2 border-b">
                                    <h2 class="text-2xl font-normal">{data.name}</h2>
                                    <p class="text-sm text-gray-400">{data.discretion}</p>
                                </div>

                                <ul class="flex-1 space-y-4">
                                    {data.features.map((features, index) =>

                                        <li class="flex items-start">
                                            <svg
                                                class="w-6 h-6 text-green-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <span class="ml-3 text-base font-medium" >{features}</span>
                                        </li>

                                    )}
                                </ul>


                                <div class="flex-shrink-0 pt-4">
                                    <button
                                        onClick={e => setSelected(data, index)}
                                        class="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        {(loading && selected == index) ? <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg> : ""}
                                        <span>Start with {data.name}</span>
                                    </button>
                                </div>
                            </section>
                        </>
                    })
                }

            </div>
        </div >
    )
}

function Loading() {
    <div className="absolute top-0 left-0 w-full h-full bg-white shadow border rounded flex ">
        <div className="flex-1 flex  items-start justify-center">
            <div className="flex-1 flex flex-col items-center justify-center pt-20">
                <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="font-semibold my-2">Please wait while we crate your account</p>
            </div>
        </div>
    </div>
}


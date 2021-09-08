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



const PLANS = [
    {
        Algo: "SHA-256",
        discription: "",
        price: "100.00",
        pct: '5%'
    },
    {
        Algo: "Scrypt",
        discription: "",
        price: "200.00",
        pct: '10%'
    },
    {
        Algo: "ECDSA",
        price: "500.00",
        discription: "",
        pct: '15%'
    },
    {
        Algo: "X11",
        price: "1000.00",
        discription: "",
        pct: '20%'
    }
]

export default function Payment({ history }) {
    const [selected, setSelected] = useState();
    function purchase() {
        const session_key = localStorage.getItem('session-token')
        axios.post(API_SERVER + '/payment', { ...PLANS[selected] }, {
            headers: { 'auth-token': session_key }
        }).then(res => window.location.href = res.data.charge.hosted_url).catch(err => console.log(err))
    }
    return (
        <div className=" flex flex-col min-h-screen">
            <Animate/>
            <div className=" bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col" style={{ height: '60vh' }}>
                <Navbar transparent_null history={history} />
                <div className="flex-1 flex flex-col md:flex-row items-center md:justify-between mx-10 ">
                    <div className=" flex flex-col justify-center  text-white space-y-3 md:w-1/2">
                        <p className="text-3xl lg:text-5xl font-extrabold">Pricing Plan</p>
                        <p className="text-xl font-semibold">You could try refreshing the page (just be sure to check the URL for errors) or head back to our homepage.</p>
                    </div>
                    <div className="text-white space-y-2 pt-5">
                        <label className="font-semibold">Currency</label>
                        <div className="flex-1 w-56 rounded-md flex justify-between items-center text-white bg-blue-700 px-5 py-2">
                            <span>United State (USD)</span>
                            <ChevronDownIcon className="w-5 h-5 text-white"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex-1 py-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ left: '200vw' }} transition={{ duration: 2 }} className="container mx-auto">
                    
                    <SelectPlan selected={selected} setSelected={setSelected} />
                    <div className="flex items-center justify-center my-5">
                        <button className="bg-blue-500 rounded-md w-40 py-3 font-semibold text-white" onClick={e => purchase()}>Purchase</button>
                    </div>
                </motion.div>
            </div>

            <ExchangeCard wide />
            <Footer />
        </div>
    )
}





function SelectPlan({ selected, setSelected }) {

    return (
        <div className="mx-5">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                {PLANS.map((data, index) => (
                    <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }} key={index.toString()} onClick={e => setSelected(index)} className="h-56 flex-1 flex flex-col p-3 border bg-white shadow rounded-lg hover:shadow-lg cursor-pointer hover:border-blue-400">
                        <h3 className="text-3xl font-semibold text-gray-900 uppercase">${data.price}<span className="text-sm font-bold text-gray-400"> / year</span> </h3>
                        <h5 className="font-bold text-blue-500 uppercase pb-2">{data.Algo} - <span className="text-green-500">{data.pct}</span> </h5>
                        <hr />
                        <p className="pt-2">
                            Please feel free to contact us at any time using form below. We intended to help you with a collection of the most common.
                        </p>
                        {selected === index && <div className="flex-1 w-full bg-white rounded-lg flex items-center justify-center">

                            <p className="font-semibold text-blue-500">Selected</p>
                        </div>}
                    </motion.div>
                ))}
            </div>
        </div>
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


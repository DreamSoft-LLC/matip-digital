import React, { useState } from 'react'
import ExchangeCard from '../components/exchangecard'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { motion } from "framer-motion"
import { API_SERVER } from '../config'
import axios from 'axios'
import { AuthConsumer } from '../contexts/auth'



const PLANS = [
    {
        Algo: "SHA-256",
        discription : "",
        price: "100.00",
        pct: '5%'
    },
    {
        Algo: "Scrypt",
        discription : "",
        price: "200.00",
        pct: '10%'
    },
    {
        Algo: "ECDSA",
        price: "500.00",
        discription : "",
        pct: '15%'
    },
    {
        Algo: "X11",
        price: "1000.00",
        discription : "",
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
        <div className="w-screen flex flex-col min-h-screen">
            <Navbar history={history} />

            <div className="flex-1 py-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ left: '200vw' }} transition={{ duration: 2 }} className="container mx-auto">
                    <div className="flex items-center justify-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h1 className="text-3xl ">SELECT BOT PLAN</h1>
                    </div>
                    <p className="text-center mb-5">Purchase your prefered bot to work on your behalf.</p>
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


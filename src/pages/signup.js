import React, { useState } from 'react'
import Navbar from '../components/navbar'
import { motion } from "framer-motion"
import { API_SERVER } from '../config'
import axios from 'axios'
import { AuthConsumer } from '../contexts/auth'
import Register from './register'

export default function Signup({ history }) {
    const [step, setStep] = useState(0)
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-600 to-blue-500">
            <Navbar history={history} />

            <div className="flex-1">

                {step === 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ left: '200vw' }} transition={{ duration: 2 }} className="flex-1">
                    <Register step={step} setStep={setStep} />
                </motion.div>}
                {step === 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ left: '200vw' }} transition={{ duration: 2 }} className="container mx-auto">
                    <div className="flex items-center justify-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h1 className="text-3xl ">SELECT BOT PLAN</h1>
                    </div>
                    <p className="text-center mb-5">Purchase your prefered bot to work on your behalf.</p>
                    <SelectPlan step={step} setStep={setStep} />
                    <div className="flex items-center justify-center my-5">
                        <button className="bg-blue-500 rounded-md w-40 py-3 font-semibold text-white">Purchase</button>
                    </div>
                </motion.div>}
            </div>

        </div>
    )
}




const PLANS = [
    {
        Algo: "SHA-256",
        price: "100.00",
        pct: '5%'
    },
    {
        Algo: "Scrypt",
        price: "200.00",
        pct: '10%'
    },
    {
        Algo: "ECDSA",
        price: "500.00",
        pct: '15%'
    },
    {
        Algo: "X11",
        price: "1000.00",
        pct: '20%'
    }
]

function SelectPlan({ step, setStep }) {

    const [selected, setSelected] = useState();

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
                            <svg xmlns="http://www.w3.org/2000/svg" className=" text-blue-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
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

const securityQuestion = [
    {
        id: 0,
        quest: "Select a question from the following options."
    },
    {
        id: 1,
        quest: "Who's your daddy?"
    },
    {
        id: 2,
        quest: "What is your favorite color?"
    },
    {
        id: 3,
        quest: "What is your mother's favorite aunt's favorite color?"
    },
    {
        id: 4,
        quest: "What is the first name of the person you first kissed?"
    },
    {
        id: 5,
        quest: "What is the last name of the teacher who gave you your first failing grade?"
    },
    {
        id: 6,
        quest: "What brand of food did your first pet eat?"
    }
]

function PersonalForm({ step, setStep }) {

    const { setIsAuth } = AuthConsumer()
    const signup = (e) => {
        if (e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "" || e.target[3].value === "" || e.target[4].value === "" || e.target[6].value === "") return;
        if (e.target[3].value !== e.target[4].value) return;
        if (e.target[5].value == 0) return;
        // create account
        axios.post(API_SERVER + '/auth/register', {
            name: e.target[0].value + " " + e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            securityQuestion: securityQuestion[e.target[5].value].quest,
            securityAnswer: e.target[6].value
        }).then((res) => {
            // account created successfully
            console.log(res.data)
            if (res.status == 200) {
                // login to account
                axios.post(API_SERVER + '/auth/login', {
                    email: e.target[2].value,
                    password: e.target[3].value,
                }).then(
                    res => {
                        console.log(res.data)
                        // set login to true 
                        localStorage.setItem('session-token', res.data.token);
                        setIsAuth(true);
                        // select plan
                        setStep(prev => prev + 1)
                    }
                ).catch(err => console.log(err.message))

            }

        }).catch(err => console.log(err, "err"))


    }

    return (
        <>
            <form method="POST" onSubmit={e => { e.preventDefault(); signup(e); console.log(e) }} className="flex-1 relative items-center justify-center space-y-3">

                <div className="flex flex-col items-center justify-center mb-5">
                    <div className="flex items-center flex-col space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 my-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <h1 className="text-3xl font-bold text-center">ACCOUNT REGISTRATION</h1>
                    </div>
                    <p className="text mb-5 text-center">Please fill the form below with the right informatin to get started.</p>
                </div>
                <div className="w-full flex items-center space-x-2">
                    <div className="flex-1">
                        <label className="font-semibold">First Name</label>
                        <input className="w-full border p-3" placeholder="First Name" />
                    </div>
                    <div className="flex-1">
                        <label className="font-semibold">Last Name</label>
                        <input className="w-full border p-3" placeholder="Last Name" />
                    </div>
                </div>
                <div>
                    <label className="font-semibold">Email</label>
                    <input className="w-full border p-3" placeholder="Email" />
                </div>
                <div>
                    <label className="font-semibold">Password</label>
                    <input className="w-full border p-3" type="password" placeholder="Password" />
                </div>
                <div>
                    <label className="font-semibold">Repeat Password</label>
                    <input className="w-full border p-3" type="password" placeholder="Repeat Password" />
                </div>
                <div>
                    <label className="font-semibold">Security Question</label>
                    <select className="w-full border p-3" name="security1">
                        {securityQuestion.map((data, index) => <option value={data.id}>{data.quest}</option>)}

                    </select>
                </div>
                <div>
                    <label className="font-semibold">Security Question Answer</label>
                    <input className="w-full border p-3" type="text" placeholder="Answer" />
                </div>
                <button type="submit" className="bg-blue-500 p-3 w-full text-white rounded">
                    Next
                </button>
            </form>
        </>
    )
}
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Referal from '../components/referal'
import { API_SERVER } from '../config'
import { AuthConsumer } from '../contexts/auth'
import EarningsPage from './earnings'
const cover = "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1891&q=80"


export default function Dashboard({ history }) {

    const { url } = useRouteMatch()

    const { setIsAuth } = AuthConsumer()

    const [loading, setLoading] = useState(true);

    const [dashData, setDashData] = useState({})

    const getInfomation = () => {
        const session_key = localStorage.getItem('session-token')
        axios.get(API_SERVER + '/dashboard', { headers: { 'auth-token': session_key } }).then(
            response => { setDashData(response.data) }
        ).catch(err => {
            localStorage.clear('session-token');
            setIsAuth(false);
        }).finally(() => setLoading(false))
    }

    console.log(dashData);

    useEffect(() => {
        getInfomation()
    }, [])

    useEffect(() => {
        if (dashData.account) {
            if (!dashData.account.plan) {
               history.push('/payment')
            }
        }
    }, [dashData])

    return (
        <>
            {loading ? <div className="h-screen w-screen flex justify-center items-center">

                <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>

            </div> :
                <div className="min-h-screen flex flex-1 flex-col w-screen">

                    <Navbar isLoggedin />

                    <div className="bg-blue-500 container mx-auto flex items-center justify-center" style={{ height: "30vh", backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#00000094', backgroundBlendMode: 'multiply', backgroundSize: "cover" }}>
                        <div>
                            <div className="text-center font-semibold text-white">
                                <p className="font-semibold text-xl">Welcome Back</p>
                            </div>
                            <h1 className="text-4xl font-bold text-center">
                                <span className="border-blue-500 uppercase text-white">Pee <span className="text-blue-500">ME</span> </span>
                            </h1>

                        </div>
                    </div>
                    <Route path={url} exact component={DashboardComp} />
                    <Route path={url + "/earnings"} exact component={Earnings} />
                    <Route path={url + "/referals"} exact component={Referal} />
                    <Footer />
                </div>}
        </>
    )
}


function Earnings() {
    return (
        <div className="container mx-auto mt-5 flex-1">
            <div className="bg-white border shadow p-3 flex items-center space-x-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <div className="uppercase">
                        <span>Bot : </span>
                        <span className="font-semibold px-3 rounded-md">Scrypt</span>
                    </div>
                    <div className="uppercase">
                        <span>Status : </span>
                        <span className="text-green-500 font-semibold px-3 rounded-md capitalize">Running</span>
                    </div>
                </div>
                <div className="flex-1">

                </div>
                <button className="bg-blue-500  text-white font-semibold px-3 py-1 rounded-md">Upgrade</button>
            </div>
            <div className="my-5">
                <h1 className="text-2xl font-semibold text-gray-700">Earnings History</h1>
                <p>list of the earning history.</p>
            </div>
            <EarningsPage />
        </div>
    )
}

function DashboardComp() {
    const people = [
        {
            name: 'Withdrawal',
            title: '$100.00',
            department: 'Optimization',
            role: '12/04/2021',
            email: 'jane.cooper@example.com',
            image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        // More people...
    ]
    return (
        <div className="container mx-auto mt-5">
            <div className="bg-white border shadow p-3 flex items-center space-x-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <div className="uppercase">
                        <span>Bot : </span>
                        <span className="font-semibold px-3 rounded-md">Scrypt</span>
                    </div>
                    <div className="uppercase">
                        <span>Status : </span>
                        <span className="text-green-500 font-semibold px-3 rounded-md capitalize">Running</span>
                    </div>
                </div>
                <div className="flex-1">

                </div>
                <button className="bg-blue-500  text-white font-semibold px-3 py-1 rounded-md">Upgrade</button>
            </div>
            <div className="my-5">
                <div className="flex items-center justify-between px-3 md:px-0 text-center md:text-left">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-700">Earnings Score</h1>
                        <p>An overview of the performance of your bot in realtime</p>
                    </div>
                    <button className="hidden md:flex bg-yellow-500 rounded-md w-40 py-3 font-semibold text-white">
                        Withdraw
                    </button>
                </div>
                <div initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }} className="my-5">

                    <div class="grid grid-cols-1 md:grid-cols-3 px-3 md:px-0">
                        <div className="flex-1 border p-5 bg-white shadow flex items-center justify-between">

                            <div className="flex ">
                                <div className="border rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">Active BOT</h1>
                                <h5 className="font-bold text-blue-500 uppercase pb-2">$ 2000.00<span className="text-sm font-bold text-gray-400"> / LIFETIME</span></h5>
                            </div>

                        </div>

                        <div className="flex-1 border p-5 bg-white shadow flex items-center justify-between">
                            <div className="flex ">
                                <div className="border rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">Account Balance</h1>
                                <p className="text-gray-900 font-bold pb-2 text-right">$2000.00</p>
                            </div>
                        </div>

                        <div className="flex-1 border p-5 bg-white shadow flex items-center justify-between">
                            <div className="flex ">
                                <div className="border rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">Total Withdrawal</h1>
                                <p className="text-red-500 font-bold pb-2 text-right">$2000.00</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-700 text-center">Account Tracnsactions</h1>
            <p className="text-center">list of your recent 5 account tracnsactions in order.</p>

            <div className="flex-1 my-5">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Description
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Date
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {people.map((person) => (
                                            <tr key={person.email}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">


                                                        <div className="text-sm font-medium text-gray-900">{person.name}</div>


                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{person.title}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        confirmed
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
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
            response => {
                setDashData(response.data)
                localStorage.setItem('email', response.data.members.email)
                localStorage.setItem('name', response.data.members.name)
            }
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
            {loading ?
                <div className="h-screen w-screen flex-col flex justify-center items-center">

                    <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>

                    <h1 className="text-sm font-semibold text-gray-600 my-3">Please wait...</h1>

                </div> :
                <div className="min-h-screen flex flex-1 flex-col">


                    <div className="bg-blue-500 flex flex-col" style={{ height: "70vh", backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#00000094', backgroundBlendMode: 'multiply', backgroundSize: "cover" }}>
                        <Navbar isLoggedin />
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="text-center font-semibold text-white">
                                <p className="font-semibold text-xl">Welcome Back</p>
                            </div>
                            <h1 className="text-4xl font-bold text-center">
                                <span className="border-blue-500 uppercase text-white">{dashData.members.name}</span>
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
        <div className="container mx-auto">
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
                <button className="bg-green-500  text-white font-semibold px-3 py-1 rounded-md">Withdraw</button>
            </div>
            <div className="mb-16">


                <div initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }} className="">

                    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">

                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400 uppercase">active bot</span>
                                    <span class="text-lg font-semibold">100,221</span>
                                </div>
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                            </div>
                            <div>
                                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                                <span>from 2019</span>
                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400 uppercase">account balance</span>
                                    <span class="text-lg font-semibold">100,221</span>
                                </div>
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                            </div>
                            <div>
                                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                                <span>from 2019</span>
                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400 uppercase">Total withdrawals</span>
                                    <span class="text-lg font-semibold">100,221</span>
                                </div>
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                            </div>
                            <div>
                                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                                <span>from 2019</span>
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
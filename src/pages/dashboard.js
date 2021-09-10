import { CashIcon, DotsCircleHorizontalIcon, LightningBoltIcon, SwitchVerticalIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import Account from '../components/account'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Referal from '../components/referal'
import { API_SERVER, formatter } from '../config'
import { AuthConsumer } from '../contexts/auth'
import { CubeIcon } from '@heroicons/react/solid'
import WithdrawModal from './../components/withdraw.js'
import EarningsPage from './earnings'
import { PLANS } from './payment'
const cover = "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1891&q=80"


export default function Dashboard({ history }) {

    const { url } = useRouteMatch()

    const { setIsAuth, setUserData, userData } = AuthConsumer()

    const [loading, setLoading] = useState(true);

    const [dashData, setDashData] = useState({})

    const getInfomation = () => {
        const session_key = localStorage.getItem('session-token')
        axios.get(API_SERVER + '/dashboard', { headers: { 'auth-token': session_key } }).then(
            response => {
                setDashData(response.data)
                setUserData(response.data)
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
                <div className="h-screen w-screen flex-col flex justify-center items-center space-y-3">

                    <CubeIcon className="h-10 w-10 animate animate-bounce" />

                    <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">

                        <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                            <path clip-rule='evenodd'
                                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                                fill='currentColor' fill-rule='evenodd' />
                        </svg>


                        <div>Loading ...</div>
                    </div>

                </div> :
                <div className="min-h-screen flex flex-1 flex-col">

                    <WithdrawModal />
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
                    <div className="bg-white border shadow p-3 flex items-center space-x-5 text-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-7 w-7 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <div className="uppercase flex items-center">
                                <span>Bot : </span>
                                <span className="font-semibold px-3 rounded-md">{PLANS[userData.account.plan - 1].name}</span><DotsCircleHorizontalIcon className="h-2 w-2 text-gray-600" /> <span className="text-green-500 font-semibold px-3 rounded-md capitalize">Running</span>
                            </div>
                        </div>
                        <div className="flex-1">

                        </div>
                        <Link to="/pricing" className="bg-blue-500  text-white font-semibold px-3 py-2 rounded">Upgrade</Link>
                    </div>

                    <Route path={url} exact component={DashboardComp} />
                    <Route path={url + "/earnings"} exact component={Earnings} />
                    <Route path={url + "/referals"} exact component={Referal} />
                    <Route path={url + "/account"} exact component={Account} />
                    <Footer />
                </div>}
        </>
    )
}


function Earnings() {
    const { setIsAuth, userData, setIsAuthToggle } = AuthConsumer()

    useEffect(() => {
        setIsAuthToggle(false)
    }, [])
    return (
        <div className="container mx-auto mt-5 flex-1">
            <div className="my-5 text-center">
                <h1 className="text-2xl font-semibold text-gray-700">Earnings History</h1>
                <p>list of the earning history.</p>
            </div>
            <EarningsPage />
        </div>
    )
}

function DashboardComp() {
    const { setIsAuth, userData, setIsAuthToggle } = AuthConsumer()

    useEffect(() => {
        setIsAuthToggle(false)
    }, [])
    return (
        <div className="container mx-auto px-7">

            <div className="mb-16">


                <div initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }} className="">

                    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">

                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400 uppercase">active bot</span>
                                    <span class="text-lg font-semibold">{formatter.format(PLANS[userData.account.plan - 1].price.lifetime)}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <LightningBoltIcon className=" text-gray-300  h-10 w-10" />

                                </div>
                            </div>
                            <div className="space-x-3">
                                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">{PLANS[userData.account.plan - 1].features[0]}</span>

                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400 uppercase">account balance</span>
                                    <span class="text-lg font-semibold">{formatter.format(userData.account.balance)}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <CashIcon className=" text-gray-300  h-10 w-10" />

                                </div>
                            </div>
                            <div className="space-x-3">

                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400 uppercase">Total withdrawals</span>
                                    <span class="text-lg font-semibold">{formatter.format(userData.account.withdrawal)}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <SwitchVerticalIcon className=" text-gray-300  h-10 w-10" />

                                </div>
                            </div>
                            <div className="space-x-3">

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
                                {userData.transactions.length ? <table className="min-w-full divide-y divide-gray-200">
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
                                        {
                                            userData.transactions.map((data, index) => {
                                                return <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">


                                                            <div className="text-sm font-medium text-gray-900 uppercase">{data.discription}</div>


                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{formatter.format(data.amount)}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`${(data.status == "failed") && "bg-red-100 text-red-800 "} ${(data.status == "confirmed") && "bg-green-100 text-green-800 "} ${(data.status == "Pending") && "bg-yellow-100 text-yellow-800 "} px-2 inline-flex text-xs leading-5 font-semibold rounded-full `}>
                                                           {data.status }
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {new Date(data.createdAt).toLocaleDateString()}</td>

                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table> :
                                    <p className="text-center text-gray-400 py-5">No transactions available.</p>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { API_SERVER, formatter } from '../config'
import { AuthConsumer } from '../contexts/auth'




export default function EarningsPage() {
    const { setIsAuth, userData, setIsAuthToggle } = AuthConsumer()
    const [earnings, setEarnings] = useState([])

    useEffect(() => {
        const session_key = localStorage.getItem('session-token')
        setIsAuthToggle(false)
        axios.get(API_SERVER + '/dashboard/earnings', { headers: { 'auth-token': session_key } })
            .then(resp => {
                setEarnings(resp.data.earnings)
            })
            .catch(error => {

            })
    }, [])

    return (
        <div className="flex-1 my-5 px-7">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            {earnings.length ? <table className="min-w-full divide-y divide-gray-200">
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
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only"></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {earnings.map((person,key) => (
                                        <tr key={key}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">


                                                    <div className="text-sm font-medium text-gray-900">{person.discription}</div>


                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{formatter.format(person.amount)}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Confirmed
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(person.createdAt).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> : <p className="text-center text-gray-400 py-5">No Earnings History.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

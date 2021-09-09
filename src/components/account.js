import { SaveIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import { AuthConsumer } from '../contexts/auth'

export default function Account() {
    const { setIsAuth, userData, setIsAuthToggle } = AuthConsumer()

    useEffect(() => {
        setIsAuthToggle(false)
    }, [])
    return (
        <div className="flex-1 p-7 space-y-4 container mx-auto bg-white shadow py-10">
            <h1 className="text-center text-2xl font-semibold">
                <span className="border-b pb-3">
                    Account Settings
                </span>
            </h1>
            <div className="border-b pb-6">
                <h1 className="pb-2 font-semibold">Account details</h1>
                <div>
                    <label className="text-sm pb-2">Full Name</label>
                    <input className="border p-2 rounded w-full" type="text" placeholder="Full Name" />
                </div>
                <div>
                    <label className="text-sm pb-2">Email</label>
                    <input className="border p-2 rounded w-full" type="email" placeholder="Email" />
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex-1">
                        <label className="text-sm pb-2">New password</label>
                        <input className="border p-2 rounded w-full" type="password" placeholder="New password" />
                    </div>
                    <div className="flex-1">
                        <label className="text-sm pb-2">Repeat password</label>
                        <input className="border p-2 rounded w-full" type="password" placeholder="New password" />
                    </div>
                </div>
                <div>
                <button className="bg-gray-600 h-full font-semibold text-white px-5 py-2 mt-3">
                        Save
                    </button>
                </div>
            </div>

            <div>
                <h1 className="pb-2 font-semibold">Wallet settings</h1>
                <div>
                    <label className="text-sm pb-2">Bitcoin Wallet</label>
                    <div className="flex items-center justify-center">
                    <input className="border p-2 rounded-l w-full" type="text" placeholder="Bitcoin Address" />
                    <button className="bg-gray-600 h-full font-semibold text-white px-5 py-2">
                        Save
                    </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

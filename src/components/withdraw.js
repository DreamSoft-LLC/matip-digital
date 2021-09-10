import React, { useEffect,useState } from 'react'
import { AuthConsumer } from '../contexts/auth'
export default function WithdrawModal() {
    const { wms, setWMS } = AuthConsumer()
    const [wallet, setWallet] = useState('')

    useEffect(() => {
        setWallet(localStorage.getItem('btc'))
    }, [])
    return (
        <div className={`${!wms && 'hidden '}min-w-screen h-screen animated px-3 md:px-0 fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover`}>
            <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="w-full max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">

                <div class="flex flex-col w-full">

                    <div class="text-center p-5 flex-auto justify-center">
                        <h2 class="text-xl font-bold py-4 ">Withdrawal Funds</h2>
                        <p class="text-sm text-gray-500 px-8">Please provide a bitcoin wallet address to recieve your funds in your account tab.</p>
                    </div>
                    <div class="flex w-full px-10">
                        <div class="flex flex-row border rounded flex-1">
                            <span class="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">$</span>
                            <input type="number" name="price" placeholder="20" class=" bg-grey-lighter text-grey-darker py-2 font-normal rounded text-grey-darkest border-grey-lighter rounded-l-none w-full" />
                        </div>
                    </div>


                    <div class="flex w-full px-10">
                        <div class="flex flex-row border rounded flex-1">
                            <span class="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
                                <img src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013'} className="h-5 w-5" />
                            </span>
                            <input type="text" name="wallet" placeholder={wallet || "bitcoin address"} class=" bg-grey-lighter text-grey-darker py-2 font-normal rounded text-grey-darkest border-grey-lighter rounded-l-none w-full" />
                        </div>
                    </div>

                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={e=>setWMS(false)} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                            Cancel
                        </button>
                        <button class="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">Withdraw</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
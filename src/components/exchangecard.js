import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY_CRYPTO } from '../constant'


export default function ExchangeCard({wide}) {
    const [currencies, setCurrencies] = useState([])

    function GetPrices() {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY_CRYPTO}&ids=BTC,ETH,XRP,XMR&interval=1h,1d&convert=USD&per-page=100&page=1`)
        .then(res=>setCurrencies(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        GetPrices();
    }, [])

    return (
        <div className={`flex py-5 flex-wrap bg-white border justify-between ${wide === true ? '' : 'container mx-auto'} px-10 shadow mt-0 space-y-3`}>
            {currencies.map((data, index) => (
                <div className="flex items-center space-x-2" key={index.toString()}>
                    <div className="border-2 rounded-full p-3">
                        <img className="h-8 w-8" src={data.logo_url} />
                    </div>
                    <div>
                        <h5 className="font-semibold">{data.name}</h5>
                        <h5 className="font-extrabold text-blue-700">${Math.round(data.price*100)/100}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

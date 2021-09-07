import axios from 'axios';
import React from 'react'
import ExchangeCard from '../components/exchangecard';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import { API_SERVER } from '../config';
import { AuthConsumer } from '../contexts/auth';

const cover = "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=100";

export default function Login({history}) {

    const {setIsAuth} = AuthConsumer()

    function login(e) {
        if (e.target[0].value =="" || e.target[1].value =="") return
        axios.post(API_SERVER+'/auth/login',{
            email: e.target[0].value,
            password:e.target[1].value
        }).then(e=>{
            console.log(e.data)
            localStorage.setItem('session-token',e.data.token)
            setIsAuth(true);
        }).catch(err=>{

        })
    }

    return (
        <div>
            <div className="h-screen flex flex-col">
                <Navbar history={history} />

                <div className="flex-1 flex items-center mx-auto justify-center md:w-1/4">
                    <form method="POST" onSubmit={e=>{e.preventDefault();login(e)}} className="flex-1 items-center justify-center space-y-3">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                                <h1 className="text-xl font-bold">ACCESS ACCOUNT</h1>
                            </div>
                            <p>Please provide an authentic email and password.</p>
                        </div>
                        <div>
                            <label className="font-semibold">Email</label>
                            <input className="w-full border p-3" placeholder="Email" />
                        </div>
                        <div>
                            <label className="font-semibold">Password</label>
                            <input className="w-full border p-3" type="password" placeholder="Password" />
                        </div>
                        <button className="bg-blue-500 p-3 w-full text-white rounded">
                            Login
                        </button>
                    </form>
                </div>

                <ExchangeCard/>

            </div>
                <Footer />
        </div>
    )
}

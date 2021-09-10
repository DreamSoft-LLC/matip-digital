import axios from 'axios';
import React, { useState } from 'react'
import bg2 from '../assets/images/bg2.jpg'
import { Link } from 'react-router-dom'

import Animate from '../components/animate/animate'
import Navbar from '../components/navbar'
import { API_SERVER } from '../config';
import { AuthConsumer } from '../contexts/auth';
import { useAlert } from 'react-alert'
const cover = "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=100";

export default function Login({ history }) {

    const { setIsAuth } = AuthConsumer()
    const alert = useAlert()
    const [loading, setloading] = useState(false)

    function login(e) {
        setloading(true)
        if (e.target[0].value == "" || e.target[1].value == "") return
        axios.post(API_SERVER + '/auth/login', {
            email: e.target[1].value,
            password: e.target[2].value
        }).then(e => {
            console.log(e.data)
            localStorage.setItem('session-token', e.data.token)
            setIsAuth(true);
        }).catch(error => {
           if(error.response.data) alert.error(error.response.data)
        }).finally(()=>setloading(false))
    }

    return (
        <div className="bg-gradient-to-b from-indigo-600 to-blue-500">

            <Navbar />

            <div class="relative min-h-screen flex ">

                <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
                        <div class="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                        <div class="w-full  max-w-md z-10">
                            <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Hi 👋 Welcome Back !!</div>
                            <div class="sm:text-sm xl:text-md text-gray-200 font-normal"> Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups
                            </div>
                        </div>
                        <Animate />
                    </div>
                    <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                        <div class="max-w-md w-full space-y-8">
                            <div class="text-center">
                                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                                    Sign In
                                </h2>
                                <div class="flex items-center justify-center space-x-2 mt-3">
                                    <span class="h-px w-16 bg-gray-200"></span>
                                    <span class="text-gray-300 font-normal">Please sign in to your account</span>
                                    <span class="h-px w-16 bg-gray-200"></span>
                                </div>
                            </div>


                            <form onSubmit={e => { e.preventDefault(); login(e) }} class="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" value="true" />

                                <div class="relative">
                                    <div class="absolute right-3 mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                    <input
                                        class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none  focus:border-indigo-500"
                                        type="" placeholder="mail@gmail.com" />
                                </div>
                                <div class="mt-8 content-center">
                                    <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input
                                        class="w-full content-center text-base px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="password" placeholder="Enter your password" />
                                </div>

                                <div>
                                    <button type="submit" disabled={loading}
                                        class="w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        {loading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>}
                                        <span>Sign in</span>
                                    </button>
                                </div>
                                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                    <span>Are you New here?</span>
                                    <Link to="/signup"
                                        class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                                        up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

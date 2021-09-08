import axios from 'axios';
import React from 'react'
import bg2 from '../assets/images/bg2.jpg'
import { Link } from 'react-router-dom'

import Animate from '../components/animate/animate'
import Navbar from '../components/navbar'
import { API_SERVER } from '../config';
import { AuthConsumer } from '../contexts/auth';

const cover = "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=100";

export default function Login({ history }) {

    const { setIsAuth } = AuthConsumer()

    function login(e) {
        if (e.target[0].value == "" || e.target[1].value == "") return
        axios.post(API_SERVER + '/auth/login', {
            email: e.target[0].value,
            password: e.target[1].value
        }).then(e => {
            console.log(e.data)
            localStorage.setItem('session-token', e.data.token)
            setIsAuth(true);
        }).catch(err => {

        })
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


                            <form class="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" value="true" />

                                <div class="relative">
                                    <div class="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
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
                                    <button type="submit"
                                        class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign up
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






            {/* 
            <div class="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${bg2})` }}>
                <Animate />
                <Navbar history={history} />
                <div class="hidden md:block absolute bg-gradient-to-b from-blue-500 to-blue-400 opacity-75 top-0 left-0 w-full h-full z-0"></div>
                <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div class="self-start hidden lg:flex flex-col  text-white">
                            <img src="" class="mb-3" />
                            <h1 class="mb-3 font-bold text-5xl">Hi 👋 Welcome Back !!</h1>
                            <p class="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups</p>
                        </div>
                    </div>
                    <div class="flex justify-center self-center  z-10">
                        <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div class="mb-4">
                                <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                                <p class="text-gray-500">Please sign in to your account.</p>
                            </div>
                            <form method="POST" onSubmit={e => { e.preventDefault(); login(e) }} class="space-y-5">
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="mail@gmail.com" />
                                </div>
                                <div class="space-y-2">
                                    <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="Enter your password" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="text-sm">
                                        <a href="#" class="text-blue-400 hover:text-blue-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign in
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    )
}

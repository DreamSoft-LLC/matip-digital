import React from 'react'
import { Link } from 'react-router-dom';
import Animate from '../components/animate/animate';
import ExchangeCard from '../components/exchangecard';
import Footer from '../components/footer';
import Navbar from '../components/navbar'

const cover = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

export default function Aboutus({ history }) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 ">
                <div className="bg-blue-500 flex flex-col " style={{ minHeight: "60vh", backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#00000094', backgroundBlendMode: 'multiply', backgroundSize: "cover" }}>
                    <Navbar history={history} />
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold pt-5 text-center my-5">
                            <span className="border-blue-500 uppercase text-white">About <span className="text-blue-500">Us</span> </span>
                        </h1>
                        <div className="text-center font-semibold text-white">
                            <Link to="/">Home</Link> <span className="px-3">/</span> <Link to='/about-us' className="text-blue-500">About</Link>
                        </div>
                    </div>
                </div>
                <div className="px-10">
                    <h1 className="text-4xl font-bold pt-5 text-center my-5">
                        <span className="border-blue-500 uppercase">WHAT WE <span className="text-blue-500">DO</span> </span>
                    </h1>
                    <div>
                        <p>
                            We offer mining solutions through customized bots and established funds across alternative strategies including diversified,
                             strategy focused and opportunistic. We have distinct teams that are responsible for digital mining research,
                              operational due diligence and risk management. As one of the world's largest alternative digital mining managers,
                               Matip Bot has the talent, scale and resources to bring clients the creative and meaningful solutions they require to achieve their goals.
                        </p>
                    </div>
                </div>
            
            </div>

            <>
                <div class="relative bg-gradient-to-r from-purple-800 to-blue-500 p-5 lg:p-20">
                    <Animate />
                    <div class='md:flex'>
                        <div class="hidden md:w-1/2 md:flex">

                        </div>
                        <div class="w-full md:w-6/12 relative">
                            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-md">
                                <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40  w-40 ">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2" alt="" class="h-full w-full" />
                                </div>

                                <h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
                                <h6 class="mt-2 text-sm font-medium">Founder</h6>

                                <p class="text-xs text-gray-500 text-center mt-3 px-8">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.Ab enim molestiae nulla.Ab enim molestiae nulla.
                                </p>
                                <div class="mt-6 pt-3 flex flex-wrap mx-5 border-t items-center">
                                    <div class="text-xs cursor-pointer mr-2 my-1 uppercase tracking-wider border px-5 py-1 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100">
                                        Sebastianbb12@mail.com
                                    </div>
                                    <div class="text-xs cursor-pointer mr-2 my-1 uppercase tracking-wider border px-5 py-1 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100">
                                        +1-555-1545-452
                                    </div>
                                    <div class="text-xs cursor-pointer mr-2 my-1 uppercase tracking-wider border px-5 py-1 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100">
                                        @Sebasti12
                                    </div>
                                    <div class="text-xs cursor-pointer mr-2 my-1 uppercase tracking-wider border px-5 py-1 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100">
                                        +1-555-1545-452
                                    </div>
                                    <div class="text-xs cursor-pointer mr-2 my-1 uppercase tracking-wider border px-5 py-1 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100">
                                        +1-555-1545-452
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </>

            <ExchangeCard wide />
            <Footer />
        </div>
    )
}

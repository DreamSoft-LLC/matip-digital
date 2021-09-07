import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import ExchangeCard from '../components/exchangecard';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
const cover = "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=100";


export default function Landing({ history }) {
    return (
        <div>
            <Navbar history={history} />
            <div className="flex flex-col h-96 md:min-h-screen" style={{backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#00000094', backgroundBlendMode: 'multiply', backgroundSize: "cover" }}>
                <div className="hidden md:flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold space-x-5 py-10">
                    <Link to="/">Homepage</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/terms-of-services">Terms of services</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
                <div className="flex justify-center items-center flex-1 px-3">
                    <div className="text-center">
                        <h2 className="font-extrabold text-white uppercase">The trusted investment partner.</h2>
                        <div className="uppercase text-4xl font-extrabold text-white">
                            <h3 >BETTER RETURN ON INVESTMENT</h3>
                            <p className="text-blue-500">
                                PURHASE BOTS TO WORK ON YOUR BEHALVES.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <ExchangeCard />
            <div className="container mx-auto my-10">
                <h1 className="text-4xl font-bold pt-5 text-center my-5">
                    <span className="border-blue-500">Get <span className="text-blue-500">Started</span> </span>
                </h1>
                <p className="text-center px-3">
                    We offer investment solutions through customized portfolios, co-investments, direct investments and established funds across alternative strategies including diversified, strategy focused and opportunistic. We have distinct teams that are responsible for investment research, operational due diligence and risk management.
                    As one of the world's largest alternative investment managers, Horizonline has the talent, scale and resources to bring clients the creative and meaningful solutions they require to achieve their investment goals.
                </p>
                <motion.div initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }} className="flex flex-wrap items-center justify-center space-x-10 my-5">
                    <div class="grid grid-cols-1 md:grid-cols-3 px-3 md:px-0">
                        <div className="flex-1 border p-5 bg-white shadow text-center">
                            <div className="flex items-center justify-center">
                                <div className="border rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold">Create Account</h1>
                            <p>To access our services, you need to complete our registration process on our website. Registration is free and will only take a few minutes. Then you will officially become a member and will be able to perform transactions in accordance with our terms of service.</p>
                        </div>

                        <div className="flex-1 border p-5 bg-white shadow text-center">
                            <div className="flex items-center justify-center">
                                <div className="border rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold">Purchase Bot</h1>
                            <p>After registration, Select your prefred bot package to work on your behalf. Our payment modes are set to accept crypto currencies. make sure you send the right right funds to the right wallet.</p>
                        </div>

                        <div className="flex-1 border p-5 bg-white shadow text-center">
                            <div className="flex items-center justify-center">
                                <div className="border rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold">Make Profit</h1>
                            <p>The accrued interest from your deposit will be automatically transferred to your account balance according to our provided plan. Interest is accured daily and would reflect on your account daily</p>
                        </div>

                    </div>




                </motion.div>
            </div>

            <Footer />

        </div>
    )
}

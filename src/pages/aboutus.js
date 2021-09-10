import React from 'react'
import { Link } from 'react-router-dom';
import Animate from '../components/animate/animate';
import ExchangeCard from '../components/exchangecard';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import founder from '../assets/images/bg3.jpg'
import { AtSymbolIcon, LocationMarkerIcon } from '@heroicons/react/solid';

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


                <div className=" md:p-20 md:px-32  mb-80 md:mb-0">
                    <div className="flex flex-col md:flex-row h-96 shadow">
                        <div className="flex-1 p-8 space-y-2">
                            <div className="text-yellow-500 text-xl font-medium uppercase">{"Founder & CEO"}</div>
                            <div className="text-gray-800 text-5xl font-bold uppercase">Justin Zhu</div>
                            <div className="text-gray-700 pt-4">
                            Justin Zhu is the {"Founder & CEO"} of Matip Digital. Additionally, Justin Zhu has had 2 past jobs including Intern at Google.
                            </div>
                        </div>
                        <div className="flex-1 w-full h-full">
                            <img src={"https://static.euronews.com/articles/stories/05/60/59/68/600x338_cmsv2_0e29358a-f4bb-5e74-b888-f32468b96bb3-5605968.jpg"} className="md:w-full md:h-full" />
                        </div>
                    </div>
                </div>

                


                <div className="px-10 mb-10">
                    <h1 className="text-4xl font-bold pt-5 text-center my-5">
                        <span className="border-blue-500 uppercase">WHAT WE <span className="text-blue-500">DO</span> </span>
                    </h1>
                    <div>
                        <p>
                        We offer digital mining solutions through customized bots and established funds across alternative strategies including diversified, strategy focused and opportunistic. We have distinct teams that are responsible for digital mining research, operational due diligence and risk management. As one of the world's largest alternative digital mining managers, Matip Bot has the talent, scale and resources to bring clients the creative and meaningful solutions they require to achieve their goals.
                        </p>
                    </div>
                </div>
                <div class="relative bg-gradient-to-r from-purple-800 to-blue-500 p-5 lg:p-20">
                    <Animate />
                    <div class='md:flex space-y-3 md:space-y-0 md:space-x-3'>
                        
                        <div class="w-full md:w-6/12 relative">
                            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-md">
                                <div class="inline-flex overflow-hidden h-16  w-16 ">
                                    <AtSymbolIcon className="w-full h-full text-blue-500" />
                                </div>

                                <h2 class="mt-4 font-bold text-xl">support@horizonlinelimited.com</h2>

                                <p class="text-xs text-gray-500 text-center mt-3 px-8">
                                for any issues or clearifications
                                </p>
                                

                            </div>


                        </div>
                        <div class="w-full md:w-6/12 relative">
                            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-md">
                                <div class="inline-flex overflow-hidden h-16  w-16 ">
                                    <LocationMarkerIcon className="w-full h-full text-blue-500" />
                                </div>

                                <h2 class="mt-4 font-bold text-xl u capitalize">17031 Chesterfield Estates Ct</h2>

                                <p class="text-xs text-gray-500 text-center mt-3 px-8">
                                Chesterfield, MO, 63005
                                </p>
                                

                            </div>


                        </div>
                    </div>
                </div>

            </div>


            
            <Footer />
        </div>
    )
}

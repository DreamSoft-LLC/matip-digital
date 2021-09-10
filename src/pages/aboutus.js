import React from 'react'
import { Link } from 'react-router-dom';
import Animate from '../components/animate/animate';
import ExchangeCard from '../components/exchangecard';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import founder from '../assets/images/bg3.jpg'
import { CubeIcon, LocationMarkerIcon } from '@heroicons/react/solid';

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
                            <div className="text-yellow-500 text-xl font-medium uppercase">Founder</div>
                            <div className="text-gray-800 text-5xl font-bold uppercase">Dr. Sebastian w. Bennett</div>
                            <div className="text-gray-700 pt-4">
                                Lorem Ipsum is simply dummy text of the printing and  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            </div>
                        </div>
                        <div className="flex-1 w-full h-full">
                            <img src={founder} className="md:w-full md:h-full" />
                        </div>
                    </div>
                </div>



                <div class="relative bg-gradient-to-r from-purple-800 to-blue-500 p-5 lg:p-20">
                    <Animate />
                    <div class='md:flex'>
                        <div class="hidden md:w-1/2 md:flex text-white flex-col space-y-4 justify-center">
                            <div className="flex space-x-3 items-center">
                                <CubeIcon className="h-20 w-20" />
                                <div className="text-5xl font-bold uppercase">MATIP DIGITAL</div>
                            </div>
                            <div className="text-5xl font-bold capitalize pl-3">Leave smart. Get it automated.</div>
                        </div>
                        <div class="w-full md:w-6/12 relative">
                            <div class="flex flex-col items-center justify-center bg-white p-4 py-20 shadow rounded-md">
                                <div class="inline-flex overflow-hidden h-16  w-16 ">
                                    <LocationMarkerIcon className="w-full h-full text-blue-500" />
                                </div>

                                <h2 class="mt-4 font-bold text-xl u capitalize">1625 N Shoreline Blvd,</h2>

                                <p class="text-xs text-gray-500 text-center mt-3 px-8">
                                    Mountain View, CA 94043, USA
                                </p>
                                <div class="mt-6 pt-3 flex flex-wrap mx-5 border-t items-center space-x-3">
                                    <span className="font-medium">Email:</span>
                                    <span className="font-medium">Sebastianbb12@mail.com</span>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>


                <div className="px-10 mb-10">
                    <h1 className="text-4xl font-bold pt-5 text-center my-5">
                        <span className="border-blue-500 uppercase">WHAT WE <span className="text-blue-500">DO</span> </span>
                    </h1>
                    <div>
                        <p>
                            We offer investment solutions through customized portfolios, co-investments,
                            direct investments and established funds across alternative strategies including diversified,
                            strategy focused and opportunistic. We have distinct teams that are responsible for investment research,
                            operational due diligence and risk management. As one of the world's largest alternative investment managers,
                            Horizonline has the talent, scale and resources to bring clients the creative and meaningful
                            solutions they require to achieve their investment goals.
                            We believe that investing responsibly is essential to achieve
                            the best possible risk-adjusted returns for our unit holders over time.
                            Sustainability factors are often a signal of management quality, particularly over the long term.
                            We dare to take unpopular choices, as long as they are in the clients' best interests.
                            We are aligned with our clients – when we do well, clients do well.
                            Our objective is to provide the best possible risk-adjusted returns,
                        </p>
                    </div>
                </div>

            </div>


            <ExchangeCard wide />
            <Footer />
        </div>
    )
}

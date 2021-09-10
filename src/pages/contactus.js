import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { useAlert } from 'react-alert'
const cover = "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=100";
export default function Contactus({ history }) {
    const alerts = useAlert()
    const onContactus = (e) => {
        e.preventDefault();
        if (e.target[0].value == "" || e.target[1].value == "" || e.target[2].value == "" || e.target[3].value == "") {
            alerts.error("Please leave no field blank")
        }
        alerts.show("Thanks for reaching out , our support team will reach out as soon as possible")
        e.target.reset()
    }
    return (
        <div className=" min-h-screen flex flex-col">
            <div className="bg-blue-500 flex flex-col " style={{ minHeight: "60vh", backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#00000094', backgroundBlendMode: 'multiply', backgroundSize: "cover" }}>
                <Navbar history={history} />
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold pt-5 text-center my-5">
                        <span className="border-blue-500 uppercase text-white">Contact <span className="text-blue-500">Us</span> </span>
                    </h1>
                    <div className="text-center font-semibold ">
                        <Link to="/" className="text-white">Home</Link> <span className="px-3 text-white">/</span> <Link to='/contact' className="text-blue-500">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="flex-1 container mx-auto">
                <div>

                    <div className="border bg-white shadow p-10  my-10">
                        <div className=" text-xl font-semibold pb-3">SEND US A MESSAGE</div>
                        <form method="POST" onSubmit={e => onContactus(e)} className="flex flex-col md:flex-row border-b  md:space-x-5 py-5">
                            <div className="flex-1">
                                <div className="w-full flex items-center space-x-2">
                                    <div className="flex-1">
                                        <label className="font-semibold">First Name</label>
                                        <input className="w-full border p-3" placeholder="First Name" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="font-semibold">Last Name</label>
                                        <input className="w-full border p-3" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold">Email</label>
                                    <input className="w-full border p-3" placeholder="Email" />
                                </div>
                            </div>
                            <div className="flex-1 flex h-full">
                                <div className="flex-1 flex-col flex">
                                    <label className="font-semibold">Message</label>
                                    <textarea className="w-full h-44 border p-3 flex resize-none"></textarea>
                                    <button className="border bg-blue-500 w-full h-14 rounded text-white my-3">Send Message</button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <div className="flex flex-col md:flex-row space-y-5 items-center justify-center pt-5 space-x-5">
                                <div className="flex items-center space-x-2">
                                    <span className="border-blue-500 border-2 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-700 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                    <div className="font-semibold text-sm">
                                        <div> 1625 N Shoreline Blvd, </div>
                                        <div> Mountain View, CA 94043, </div>
                                        <div>USA.</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="border-blue-500 border-2 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-700 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <h5 className="font-semibold">support@horizonlinelimited.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.85707053403!2d-122.07976618475907!3d37.41685307982611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb75604546777%3A0xfa7667180440b711!2s1625%20N%20Shoreline%20Blvd%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2sgh!4v1631280793631!5m2!1sen!2sgh" width="full" height="350" allowfullscreen="" loading="lazy"></iframe>
            <Footer />
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';
import ExchangeCard from '../components/exchangecard';
import Footer from '../components/footer';
import Navbar from '../components/navbar'

const cover = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

export default function Aboutus({history}) {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Navbar history={history} />
            <div className="flex-1 container mx-auto">
                <div className="bg-blue-500 flex items-center justify-center" style={{ height: "30vh", backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#00000094', backgroundBlendMode: 'multiply', backgroundSize: "cover" }}>
                    <div>
                        <h1 className="text-4xl font-bold pt-5 text-center my-5">
                            <span className="border-blue-500 uppercase text-white">About <span className="text-blue-500">Us</span> </span>
                        </h1>
                        <div className="text-center font-semibold text-white">
                            <Link to="/">Home</Link> <span className="px-3">/</span> <Link to='/about-us' className="text-blue-500">About</Link>
                        </div>
                    </div>
                </div>
                <div>
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
                <div className="my-10">
                    <h1 className="text-4xl font-bold pt-5 text-center my-5">
                        <span className="border-blue-500 uppercase">WHAT CHOOSE <span className="text-blue-500">US</span> </span>
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
            <Footer/>
        </div>
    )
}

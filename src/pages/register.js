import axios from 'axios'
import { Link } from 'react-router-dom'
import bg2 from '../assets/images/bg3.jpg'
import Animate from '../components/animate/animate'
import Navbar from '../components/navbar'
import { API_SERVER } from '../config'
import { AuthConsumer } from '../contexts/auth'
const securityQuestion = [
    {
        id: 0,
        quest: "Select a question from the following options."
    },
    {
        id: 1,
        quest: "Who's your daddy?"
    },
    {
        id: 2,
        quest: "What is your favorite color?"
    },
    {
        id: 3,
        quest: "What is your mother's favorite aunt's favorite color?"
    },
    {
        id: 4,
        quest: "What is the first name of the person you first kissed?"
    },
    {
        id: 5,
        quest: "What is the last name of the teacher who gave you your first failing grade?"
    },
    {
        id: 6,
        quest: "What brand of food did your first pet eat?"
    }
]

function Register({ step, setStep, history, referal }) {



    const { setIsAuth } = AuthConsumer()
    const signup = (e) => {
        if (e.target[1].value === "" || e.target[2].value === "" || e.target[3].value === "" || e.target[4].value === "" || e.target[6].value === "") return;
        if (e.target[3].value !== e.target[4].value) return;
        if (e.target[5].value == 0) return;
        // create account
        axios.post(API_SERVER + '/auth/register', {
            name: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            securityQuestion: securityQuestion[e.target[5].value].quest,
            securityAnswer: e.target[6].value,
            referal
        }).then((res) => {
            // account created successfully
            console.log(res.data)
            if (res.status == 200) {
                // login to account
                axios.post(API_SERVER + '/auth/login', {
                    email: e.target[2].value,
                    password: e.target[3].value,
                }).then(
                    res => {
                        console.log(res.data)
                        // set login to true 
                        localStorage.setItem('session-token', res.data.token);
                        setIsAuth(true);
                        // select plan
                        setStep(prev => prev + 1)
                    }
                ).catch(err => console.log(err.message))

            }

        }).catch(err => console.log(err, "err"))


    }
    return (
        <div>


            <div class="relative min-h-screen flex ">
                <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
                        <div class="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                        <div class="w-full  max-w-md z-10">
                            <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Hello 👋 Join Us Now!!</div>
                            <div class="sm:text-sm xl:text-md text-gray-200 font-normal">
                                Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups
                            </div>
                            {referal && <div className="flex mt-3">
                                <span className="bg-white font-semibold px-2 py-1 rounded-md my-2 text-blue-400 text-sm flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>: {referal}</span>
                            </div>}
                        </div>
                        <Animate />
                    </div>
                    <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                        <div class="max-w-md w-full space-y-8">
                            <div class="text-center">
                                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                                    Create Account!
                                </h2>
                                <div class="flex items-center justify-center space-x-2 mt-3">
                                    <span class="h-px w-16 bg-gray-200"></span>
                                    <span class="text-gray-300 font-normal">Register with us for free</span>
                                    <span class="h-px w-16 bg-gray-200"></span>
                                </div>
                            </div>


                            <form onSubmit={e => { e.preventDefault(); signup(e) }} class="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" value="true" />
                                <div class="relative">
                                    <div class="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    </div>
                                    <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Full Name</label>
                                    <input
                                        class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none  focus:border-indigo-500"
                                        type="" placeholder="Full Name" />
                                </div>

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
                                <div class="mt-8 content-center">
                                    <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Confirm Password
                                    </label>
                                    <input
                                        class="w-full content-center text-base px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="password" placeholder="Confirm password" />
                                </div>

                                <div>
                                    <label className="font-semibold">Security Question</label>
                                    <select className="w-full border-b p-3" name="security1">
                                        {securityQuestion.map((data, index) => <option value={data.id}>{data.quest}</option>)}

                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold">Security Question Answer</label>
                                    <input className="w-full border-b p-3" type="text" placeholder="Answer" />
                                </div>

                                <div>
                                    <button type="submit"
                                        class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign up
                                    </button>
                                </div>
                                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                    <span>Already have an account?</span>
                                    <Link to="/login"
                                        class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                                        in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            {/* 
            <div class="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${bg2})` }}>
                <Animate />
                <div class="absolute bg-gradient-to-b from-blue-500 to-blue-400 opacity-75 inset-0 z-0"></div>
                <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div class="self-start hidden lg:flex flex-col  text-white">
                            <img src="" class="mb-3" />
                            <h1 class="mb-3 font-bold text-5xl">Hello dear, create an account</h1>
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
                            <form method="POST" class="space-y-5">
                                <div className="flex space-x-3 justify-start">
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 tracking-wide">First Name</label>
                                        <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="James" />
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 tracking-wide">Last Name</label>
                                        <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="Gadnar" />
                                    </div>
                                </div>

                                <div class="space-y-2">
                                    <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Email
                                    </label>
                                    <input type="email" class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="mail@gmail.com" />
                                </div>

                                <div className="flex space-x-3 justify-start">
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 tracking-wide">Password</label>
                                        <input type="password" class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="Enter password" />
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 tracking-wide">Confirm Password</label>
                                        <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="Repeat password" />
                                    </div>
                                </div>
                                
                                
                                
                                <div class="space-y-2">
                                    <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="Enter your password" />
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
            </div>
 */}



        </div>
    )
}

export default Register

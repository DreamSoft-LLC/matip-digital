import uuid from 'react-uuid'
import bg2 from '../assets/images/bg2.jpg'
import { Link } from 'react-router-dom'
import Animate from '../components/animate/animate';
import Navbar from '../components/navbar'
import { AuthConsumer } from '../contexts/auth';
const cover = "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=100";

function AdminLogin(history) {

    const { isAuth, setIsAuth } = AuthConsumer()

    const login = (e) => {
        e.preventDefault();
        console.log(e.target[0].value.toLowerCase());
        console.log(e.target[1].value.toLowerCase());

        if (e.target[0].value.toLowerCase() == "admin" && e.target[1].value == "123456") {
            localStorage.setItem('auth-login', uuid());
            setIsAuth(true);
        }
    }


    return (
        <>

            <div class="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${bg2})` }}>
                <Animate />
                <div class="hidden md:block absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 top-0 left-0 w-full h-full z-0"></div>
                <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div class="self-start hidden lg:flex flex-col  text-white">
                            <img src="" class="mb-3" />
                            <h1 class="mb-3 font-bold text-5xl">Hi 👋 Welcome Back !!</h1>
                            <p class="pr-3">sign in to your accout with your administrator mail and password.... Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups</p>
                        </div>
                    </div>
                    <div class="flex justify-center self-center  z-10">
                        <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div class="mb-4">
                                <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                                <p class="text-gray-500">Please sign in to your account.</p>
                            </div>
                            <form onSubmit={e => login(e)} method="POST" class="space-y-5">
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
            </div>


        </>
    )
}

export default AdminLogin

import { BellIcon, CashIcon, CheckIcon, CreditCardIcon, QrcodeIcon, UsersIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Switch, Route, NavLink, useRouteMatch, Link } from "react-router-dom";
import avatar from "../assets/images/bg3.jpg";
import { formatter } from "../config";
import './AdminDashboard.css'

export default function AdminDashboard() {
  const { path, url } = useRouteMatch();

  const [modal, setModal] = useState(false)


  return (
    <>
      <div className={`${modal ? '' : 'hidden'} absolute inset-0 w-screen h-screen`} style={{ zIndex: 900 }}>
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute bg-black bg-opacity-40 inset-0 cursor-pointer" onClick={e => setModal(!modal)}></div>
          <>
            <div class="relative w-3/6 mx-auto text-gray-700 rounded bg-white" style={{ zIndex: 990 }}>
              <div class="head flex border p-3 rounded-t">
                <div class="title px-2 font-semibold text-lg">Inbox</div>
                <div class="count border p-1 px-2 font-semibold bg-blue-500 text-white rounded-full text-xs cursor-pointer font-mono">1</div>
                <div class="buttons ml-auto flex text-xs" onClick={e => setModal(!modal)}>
                  <XIcon className="cursor-pointer w-6 h-6" />
                </div>
              </div>
              <div class="body border overflow-y-auto h-96">
                <div class="messages">
                  {/* msg */}
                  <div class="border-l-2 border-blue-500 tab shadow-sm mb-3">
                    <div class="border-l-2 border-transparent relative">
                      <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />

                      <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                        <span class="text-grey-darkest font-medium">
                          Thomas Shelby
                        </span>
                        <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                          <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9">
                            </polyline>
                          </svg>
                        </div>

                      </header>
                      <div class="tab-content px-10 text-sm">

                        <form class="py-3 text-grey-darkest flex items-center border-t border-gray-100">
                          <input type="text" placeholder="Enter message here" className="w-full px-3 py-2 focus:outline-none" />
                          <button type="submit" className="text-white cursor-pointer bg-blue-500 py-2 px-3 rounded-sm">reply</button>
                        </form>

                      </div>
                    </div>
                  </div>
                  {/* end of msg */}
                </div>

                {/* <div class="py-2 flex text-sm border text-gray-400 cursor-pointer bg-gray-100 hovay-200">
            <div class="name font-m5dium text-blue-500 mx-auto flex-none">Show More</div>
          </div> */}
              </div>

              <div class="py-3 flex text-sm border text-gray-400 cursor-pointer bg-gray-100 hovay-200" onClick={e => setModal(!modal)}>
                <div class="name font-m5dium text-blue-500 mx-auto flex-none">Close</div>
              </div>

            </div>
          </>

        </div>
      </div>
      <div class="h-screen w-full flex overflow-hidden" style={{ zIndex: 20 }}>
        <nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">

          <div class="flex flex-row items-center justify-between border-b border-gray-100 pb-3">
            <span class="text-lg font-semibold capitalize dark:text-gray-300">admin</span>

          </div>

          <div class="mt-5">
            <img class="h-12 w-12 rounded-full object-cover" src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png" alt="admin profile" />
            <h2 class="mt-4 text dark:text-gray-300 font-medium capitalize">
              Hello ADMIN
            </h2>

          </div>

          <div class="flex flex-col mt-3 text-gray-600 space-y-5 justify-between border-t border-gray-100 pt-3">

            <NavLink exact strict to={`${url}`} className="flex items-center w-full " activeClassName="rounded-l-full rounded-tr-full text-gray-200 py-3 bg-indigo-500">
              <div className="px-5 flex items-center space-x-4">
                <QrcodeIcon className="w-6 h-6" />
                <p>Dashboard</p>
              </div>
            </NavLink>

            <NavLink exact strict to={`${url}/users`} className="flex items-center space-x-4 w-full " activeClassName="rounded-l-full rounded-tr-full text-gray-200 py-3 bg-indigo-500">
              <div className="px-5 flex items-center space-x-4">
                <UsersIcon className="w-6 h-6" />
                <p>Users</p>
              </div>
            </NavLink>

            <NavLink exact strict to={`${url}/account`} className="flex items-center space-x-4 w-full " activeClassName="rounded-l-full rounded-tr-full text-gray-200 py-3 bg-indigo-500">
              <div className="px-5 flex items-center space-x-4">
                <CashIcon className="w-6 h-6" />
                <p>Account</p>
              </div>
            </NavLink>

            <NavLink exact strict to={`${url}/requests`} className="flex items-center space-x-4 w-full " activeClassName="rounded-l-full rounded-tr-full text-gray-200 py-3 bg-indigo-500">
              <div className="px-5 flex items-center space-x-4">
                <CreditCardIcon className="w-6 h-6" />
                <p>Requests</p>
              </div>
            </NavLink>

          </div>

          <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
            <button href="#home" class="flex items-center">
              <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 20 012-2h9z"></path>
              </svg>
              <span class="ml-2 capitalize font-medium">log out</span>
            </button>
          </div>
        </nav>

        <main class="flex-1 flex flex-col bg-white dark:bg-gray-700 transition duration-500 ease-in-out overflow-y-auto  px-10">
          <div className="border-b border-gray-200 py-3 px-10 -mx-10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Wallet:</span>
              <span className="font-medium">{formatter.format(300)}</span>
            </div>
            <span class="relative " onClick={e => setModal(!modal)}>
              <BellIcon className="w-6 h-7 text-gray-500 cursor-pointer" />
            </span>
          </div>
          <Switch>
            <Route exact path={`${path}`} component={DashboardItems} />
            <Route exact path={`${path}/users`} component={UserTable} />
            <Route exact path={`${path}/users/userinfo/:id`} component={UserInfo} />
            <Route exact path={`${path}/requests`} component={Requests} />
            <Route exact path={`${path}/payuser`} component={PayUser} />
            <Route exact path={`${path}/account`} component={Account} />
          </Switch>
        </main>
      </div>

    </>
  );
}



function DashboardItems() {
  const { url } = useRouteMatch();

  return (
    <>
      <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3 border-b dark:border-gray-600 dark:text-gray-400 pb-8">
        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Total subscriptions</span>
              <span class="text-lg font-semibold">{formatter.format(100)}</span>
            </div>
            <div class="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span> */}
          </div>
        </div>
        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Total withdrawals</span>
              <span class="text-lg font-semibold">{formatter.format(100)}</span>
            </div>
            <div class="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span> */}
          </div>
        </div>

        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Today's withdrawals</span>
              <span class="text-lg font-semibold">100,221</span>
            </div>
            <div class="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span> */}
          </div>
        </div>

        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Users</span>
              <span class="text-lg font-semibold">50</span>
            </div>
            <div class="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span> */}
          </div>
        </div>


        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Requests</span>
              <span class="text-lg font-semibold">10</span>
            </div>
            <div class="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span> */}
          </div>
        </div>
        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-400">Wallet Balance</span>
              <span class="text-lg font-semibold">{formatter.format(100)}</span>
            </div>
            <div class="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div>
            {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span> */}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="pl-1 text-xl font-semibold">Users</div>
        <div class="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-sm overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Package
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Referals
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link to={`${url}/users/userinfo/1`} class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img src={avatar} class="w-full h-full rounded-full" alt="" />
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Thomas Shelby
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">3</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link to={`${url}/users/userinfo/1`} class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-sm"
                      ></span>
                      <span class="relative">View</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}




function UserInfo() {
  return (
    <>
      <div class="flex items-center justify-center pt-36 pb-5 w-full mx-auto">
        <div className="flex-1 ">
          <div class="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-4/5 mx-auto">
            <div class="flex justify-center">
              <img
                src={avatar}
                alt=""
                class="rounded-full mx-auto absolute -top-32 w-44 h-44 shadow-2xl border-4 border-white"
              />
            </div>

            <div class="mt-16">
              <h1 class="font-bold text-center text-3xl text-gray-900">
                Thomas Shelby
              </h1>
              <p class="text-center text-sm text-gray-400 font-medium capitalize">
                premium package
              </p>

              <div class="my-5">
                <p class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">
                  thomasshelby21@outlook.com
                </p>
              </div>
              <div class="flex flex-col lg:flex-row w-full lg:space-x-5 space-y-2 lg:space-y-0 mb-2 lg:mb-4 px-5">
                <div class="w-full lg:w-1/4">
                  <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                    <div class="flex flex-row items-center justify-between">
                      <div class="flex flex-col space-y-2">
                        <div class="text-xs uppercase font-light text-gray-500">Balance</div>
                        <div class="text-sm font-bold">USD 2300</div>
                      </div>
                      <CreditCardIcon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4">
                  <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                    <div class="flex flex-row items-center justify-between">
                      <div class="flex flex-col space-y-2">
                        <div class="text-xs uppercase font-light text-gray-500">Transactions</div>
                        <div class="text-sm font-bold">USD 9300</div>
                      </div>
                      <svg class="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4">
                  <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                    <div class="flex flex-row items-center justify-between">
                      <div class="flex flex-col space-y-2">
                        <div class="text-xs uppercase font-light text-gray-500">Recent</div>
                        <div class="text-sm font-bold">USD 2300</div>
                      </div>
                      <CreditCardIcon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4">
                  <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                    <div class="flex flex-row items-center justify-between">
                      <div class="flex flex-col space-y-2">
                        <div class="text-xs uppercase font-light text-gray-500">Today's Trnsts</div>
                        <div class="text-sm font-bold">USD 2300</div>
                      </div>
                      <svg class="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

              <div class="w-full p-5">
                <div className="flex items-center justify-between w-full py-3">
                  <button className="px-3 py-2 text-sm font-medium capitalize bg-indigo-500 text-white">approve request</button>
                  <button className="px-3 py-2 text-sm font-medium capitalize rounded-sm bg-red-500 text-white">decline request</button>
                </div>
                <div class="flex flex-row items-center justify-between w-full border-t-2 border-gray-100 text-gray-600 py-4 px-4 hover:bg-gray-100 transition duration-150">
                  <span className="font-medium">xxxxx xxxxx xxxxx</span>
                  <span class="text-gray-400 text-xs">24 min ago</span>
                </div>
                <div class="flex flex-row items-center justify-between w-full border-t-2 border-gray-100 text-gray-600 py-4 px-4 hover:bg-gray-100 transition duration-150">
                  <span className="font-medium">xxxxx xxxxx xxxxx</span>
                  <span class="text-gray-400 text-xs">34 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



function PayUser() {
  return (
    <>
      <div class="min-w-screen min-h-screen  flex items-center justify-center px-5 pb-10 pt-16">
        <div class="w-full mx-auto p-5 text-gray-700 lg:w-4/5">
          <div class="w-full pt-1 pb-5">
            <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase">
              Make payment
            </h1>
          </div>
          <div class="mb-3 flex -mx-2">


          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Bitcoin Address</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="1FfmbHfnpaZjKFvyi1okTjJJusN455paPH"
                type="text"
              />
            </div>
          </div>

          <div class="mb-3 -mx-2 flex items-end">
            <div class="px-2 w-1/2">
              <label class="font-bold text-sm mb-2 ml-1">Amount</label>
              <div>
                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="02">100</option>
                  <option value="03">300</option>
                  <option value="04">500</option>
                  <option value="05">1000</option>
                </select>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <label class="font-bold text-sm mb-2 ml-1">Security code</label>
              <div>
                <input
                  class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="000"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div>
            <button class="block w-full mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold mt-10">
              <i class="mdi mdi-lock-outline mr-1"></i>PAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}



function Account() {
  return (
    <>
      <div class="relative min-w-screen min-h-screen  flex items-center justify-center px-5 pb-10">
        <div class="w-full mx-auto p-5 text-gray-700 lg:w-4/5">

          <div class="mb-10">
            <h1 class="text-center font-medium text-3xl uppercase">
              Withdraw Fund
            </h1>
          </div>
       
          <div class="mb-3 space-y-2">
            <label class="font-bold text-sm mb-2 ml-1">Bitcoin Wallet</label>
            <div>
              <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="1FfmbHfnpaZjKFvyi1okTjJJusN455paPH" type="text"/>
            </div>
          </div>

          <div class="mb-3 space-y-2">
              <label class="font-bold text-sm mb-2 ml-1">Enter Amount</label>
              <input type="text" placeholder="100" className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"/>
          </div>

          <div>
            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold mt-10">
              <i class="mdi mdi-lock-outline mr-1"></i>WITHDRAW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


function UserTable() {
  const { url } = useRouteMatch();

  return (
    <>
      <div className="pl-1 text-xl font-semibold capitalize pt-5">all Users</div>
      <div class="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-sm overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Package
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Referals
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to={`${url}/userinfo/1`} class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-full h-full rounded-full" src={avatar} alt="user_info" />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Thomas Shelby
                      </p>
                    </div>
                  </Link>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Premium</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">3</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to={`${url}/userinfo/1`} class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-sm"
                    ></span>
                    <span class="relative">View</span>
                  </Link>
                </td>
              </tr>

              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to={`${url}/userinfo/1`} class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-full h-full rounded-full" src={avatar} alt="user_info" />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Thomas Shelby
                      </p>
                    </div>
                  </Link>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Premium</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">3</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to={`${url}/userinfo/1`} class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-sm"
                    ></span>
                    <span class="relative">View</span>
                  </Link>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}


function Requests() {
  return (
    <div className="p-5">

      <div class="p-2 py-3 capitalize text-2xl font-medium text-center border-t-8 border-indigo-600 w-full rounded-tl-full rounded-br-lg shadow-md hover:shadow-lg focus:outline-none">
        Requests List
      </div>

      <div class="tabs shadow row">

        <div class="border-b tab shadow-sm mb-3">
          <div class="border-l-2 border-transparent relative">
            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />

            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
              <span class="text-grey-darkest font-medium">
                Thomas Shelby
              </span>
              <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9">
                  </polyline>
                </svg>
              </div>

            </header>
            <div class="tab-content px-10 text-sm">

              <div class="py-3 text-grey-darkest flex justify-between items-center border-t border-gray-100">
                <span className="">Bitcoin ID:</span>
                <span className="">1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</span>
              </div>

              <div class="py-3 text-grey-darkest flex justify-between items-center border-t border-gray-100">
                <span className="">Request:</span>
                <span className="">{formatter.format(100)}</span>
              </div>

              <div class="py-3 text-grey-darkest flex justify-between items-center border-t border-gray-100">
                <span className="">Action:</span>
                <button className="text-green-400 cursor-pointer border border-green-400 rounded px-5 py-1 flex items-center space-x-2">
                  <span>Confirm</span>
                  <CheckIcon className="w-4 h-4 text-green-400" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

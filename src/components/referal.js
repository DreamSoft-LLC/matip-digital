import React from 'react'

export default function Referal() {
    const people = [
        {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        // More people...
    ]
    return (
        <div className="flex-1">
            <div className="container mx-auto">
            <div initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }} className="">

                    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-2">

                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">referal bonus</span>
                                    <span class="text-lg font-semibold">100,221</span>
                                </div>
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                            </div>
                            <div>
                                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                                <span>from 2019</span>
                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">refered users</span>
                                    <span class="text-lg font-semibold">100,221</span>
                                </div>
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                            </div>
                            <div>
                                <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                                <span>from 2019</span>
                            </div>
                        </div>
                       
                    </div>

                </div>
                <h1 className="text-center  text-2xl font-semibold text-gray-700 mt-16">Downlines </h1>
                <p className="text-center">A list view of all your downlines</p>
                <div className="flex-1 my-5">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    BOT
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Date
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only"></span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {people.map((person) => (
                                                <tr key={person.email}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">


                                                            <div className="text-sm font-medium text-gray-900">{person.name}</div>


                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{person.title}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

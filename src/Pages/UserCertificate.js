import React from 'react'
import Navbar from '../components/Navbar'


function UserCertificate() {
    return (
        <>
            <div className=' bg-slate-400 h-screen'>
                <div>
                    <Navbar />
                </div>

                <div className=' text-3xl font-bold text-center text-white pt-24'>
                    <p> Certificate Application </p>
                </div>

                <div className=' p-12'>
                    <form action='#' method='POST'>
                        <div className='grid grid-cols-3 gap-6 bg-white rounded-md p-6 '>
                            <p className='text-blue-500 font-bold'>PROVIDE YOUR PERSONAL INFORMATION</p>
                            <div className=' col-span-2'></div>

                            <input type='text' placeholder='Enter Your ID Number' className=' p-3 border-2 border-gray-700 rounded-md' required />
                            <input type='text' placeholder='Enter Your First Name' className=' p-3 border-2 border-gray-700 rounded-md' required />
                            <input type='text' placeholder='Enter Your Middle Name (optional)' className=' p-3 border-2 border-gray-700 rounded-md' />
                            <input type='text' placeholder='Enter Your Last Name' className=' p-3 border-2 border-gray-700 rounded-md' required />
                        </div>

                        <div className='grid grid-cols-3 gap-6 bg-white rounded-md p-6 my-4'>
                            <p className='text-blue-500 font-bold col-span-3'>PROVIDE YOUR ADMISSION DETAILS</p>
                            {/* <div className=' col-span-2'></div> */}

                            <input type='text' placeholder='Enter Your ID Number' className=' p-3 border-2 border-gray-700 rounded-md' />

                            <select className='border-b-2 border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
                                <option> --SELECT--</option>
                                <option name='business'> BUSINESS</option>
                                <option name='cve'> CIVIL ENGINEERING</option>
                                <option name='ce'> COMPUTER ENGINEERING</option>
                                <option name='cs'> COMPUTER SCIENCE</option>
                                <option name='it'> INFORMATION TECHNOLOGY</option>
                                <option name='eee'> ELECTRICAL ENGINEERING </option>
                            </select>

                            <select className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
                                <option> --SELECT--</option>
                                <option name='l100'> 100 </option>
                                <option name='l200'> 200 </option>
                                <option name='l300'> 300 </option>
                                <option name='l400'> 400 </option>
                            </select>
                        </div>

                        <div className=' bg-white grid grid-cols-3 gap-6 rounded-md p-6 my-4'>

                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}

export default UserCertificate
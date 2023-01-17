import React from 'react'
import Navbar from '../components/Navbar'
import Lpane from "../components/Lpane";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Input from '@mui/material/Input'
import { Card } from '@mui/material'
import { UserIcon } from '@heroicons/react/20/solid'

function Finance() {
    return (
        <>
            <div className='grid-cols-1 fixed'>
                <Lpane />
                <Navbar />
            </div>

            <div className=' bg-gray-200 h-screen'>

                <div className=' grid grid-cols-5 sm:grid-cols-1'>
                    <div className='justify-center inline-flex p-12 mt-20 col-start-5'>
                        <Input className=' w-[100%]' placeholder='Search Student by ID or Name' />
                        <MagnifyingGlassIcon className='text-white w-8 text-sm hover:text-blue-600 cursor-pointer' />
                    </div>

                    <div className=' grid col-start-2 col-span-4 grid-cols-3 gap-3 mr-12'>
                        <Card className=' bg-white rounded-lg p-12 gap-3 grid-cols-1 inline-flex drop-shadow-xl z-100'>
                            <div className='grid grid-cols-1'>
                                <UserIcon className='w-20 inline text-sky-700' />
                            </div>

                            <div className=' block text-center'>
                                <p className='grid-cols-2 text-center text-xl'>Payment Portal</p>
                                {/* <p className=' text-2xl font-bold'>100</p> */}
                            </div>
                        </Card>

                        <Card className=' bg-white rounded-md p-12 gap-3 grid-cols-1 inline-flex'>
                            <div className='grid grid-cols-1'>
                                <UserIcon className='w-20 inline' />
                            </div>

                            <div className=' block text-center'>
                                <p className='grid-cols-2 text-center text-xl'>Check Student Status</p>
                                <p className=' text-2xl font-bold'>100</p>
                            </div>
                        </Card>

                        <Card className=' bg-white rounded-md p-12 gap-3 grid-cols-1 inline-flex'>
                            <div className='grid grid-cols-1'>
                                <UserIcon className='w-20 inline' />
                            </div>
                            <p className='grid-cols-2 text-center'>Payment Portal</p>
                        </Card>

                        <Card className=' bg-white rounded-md p-12 gap-3 grid-cols-1 inline-flex'>
                            <div className='grid grid-cols-1'>
                                <UserIcon className='w-20 inline' />
                            </div>
                            <p className='grid-cols-2 text-center'>Payment Portal</p>
                        </Card>
                    </div>

                </div>


            </div>
        </>

    )
}

export default Finance
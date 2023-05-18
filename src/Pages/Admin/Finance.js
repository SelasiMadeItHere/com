import React from 'react'
import Navbar from '../../components/Navbar'
import Lpane from "../../components/Lpane";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Input from '@mui/material/Input'
import { Card } from '@mui/material'
import { UserIcon, NewspaperIcon, ClipboardDocumentIcon } from '@heroicons/react/20/solid';
import Button from '@mui/material/Button';

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
                        <Input className=' w-[100%]' placeholder='Search Student by ID' />
                        <MagnifyingGlassIcon className=' w-8 text-sm mx-12 hover:text-blue-600 cursor-pointer text-blue-600' />
                    </div>

                    <div className=' grid col-start-2 col-span-4 grid-cols-3 gap-6 mr-12'>
                        <Card className=' bg-white rounded-lg p-12 gap-3 grid-cols-1 inline-flex hover:drop-shadow-xl '>
                            <div className='grid grid-cols-1'>
                                <UserIcon className='w-20 h-20 inline text-red-700'/>
                            </div>

                            <div className=' block text-center'>
                                <p className='grid-cols-2 text-center text-xl font-bold'>Certificate Portal</p>
                                <p className=' text-2xl'>100</p>
                                <Button variant='contained' color='primary' className=' m-6'>sdsas</Button>
                            </div>
                        </Card>

                        <Card className=' bg-white rounded-3xl p-12 gap-3 grid-cols-1 inline-flex hover:drop-shadow-2xl'>
                            <div className='grid grid-cols-1'>
                                <NewspaperIcon className='w-20 inline text-green-700' />
                            </div>

                            <div className=' block text-center'>
                                <p className='grid-cols-2 text-center text-xl font-bold'>Deferment Portal</p>
                                <p className=' text-2xl'>100</p>
                                <Button variant='contained' color='primary' className=' m-6'>sdsas</Button>
                            </div>
                        </Card>

                        <Card className=' bg-white rounded-md p-12 gap-3 grid-cols-1 inline-flex hover:drop-shadow-xl'>
                            <div className='grid grid-cols-1'>
                                <ClipboardDocumentIcon className='w-20 inline text-yellow-400' />
                            </div>
                            <div className=' block text-center'>
                                <p className='grid-cols-2 text-center text-xl font-bold'>Transcript Portal</p>
                                <p className=' text-2xl'>100</p>
                                <Button variant='contained' color='primary' className=' m-6'>sdsas</Button>
                            </div>

                        </Card>

                        <Card className=' bg-white rounded-md p-12 gap-3 grid-cols-1 inline-flex hover:drop-shadow-xl'>
                            <div className='grid grid-cols-1'>
                                <UserIcon className='w-20 inline text-sky-700' />
                            </div>
                            <div className=' block text-center'>
                                <p className='grid-cols-2 text-center text-xl font-bold'>Introductory Letter</p>
                                <p className=' text-2xl'>100</p>
                                <Button variant='contained' color='primary' className=' m-6'>sdsas</Button>
                            </div>

                        </Card>
                    </div>

                </div>


            </div>
        </>

    )
}

export default Finance
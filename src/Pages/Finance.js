import React from 'react'
import Navbar from '../components/Navbar'
import Lpane from "../components/Lpane";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Input from '@mui/material/Input'
import {Card} from '@mui/material'

function Finance() {
    return (
        <>
            <div className=' bg-gray-200 grid grid-cols-9 h-[100%]'>
                <div>
                    <Navbar/>
                    <Lpane />
                </div>

                <div className=' grid-cols-3 col-span-3 col-start-4 justify-center inline-flex p-12 mt-20'>
                    <Input className=' w-[100%]' placeholder='Search Student by ID or Name'/>
                    <MagnifyingGlassIcon className='text-white w-8 text-sm hover:text-blue-600 cursor-pointer'/>
                </div>

                <div className=' grid-cols-3'>
                    <Card>
                        bruasnsjasd
                    </Card>
                </div>

            </div>
        </>

    )
}

export default Finance
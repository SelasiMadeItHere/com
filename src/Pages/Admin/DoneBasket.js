import React from 'react'
import Navbar from '../../components/Navbar'
import { Card } from '@mui/material'

function DoneBasket() {
    return (
        <div className=' bg-slate-300 max-h-screen h-screen'>
            <div className=' grid grid-cols-3 grid-rows-3 h-screen' >
                <div className=' row-start-1'>
                    <Navbar />
                </div>

                <div className=' grid-cols-1 row-start-2 m-24'>
                    <Card className=' h-24 pl-12'>
                        <div className=' text-xl'>DEFERMENT</div>
                        <div className=' text-center'>100</div>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default DoneBasket
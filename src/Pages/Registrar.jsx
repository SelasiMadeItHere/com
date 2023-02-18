import React from 'react'
import { Card } from '@mui/material'
import RegistrarDash from '../components/RegistrarDash'
import Lpane from '../components/Lpane'
import Navbar from '../components/Navbar'
import Badge from '@mui/material'


function Registrar() {
    return (
        <>
            <div className=' bg-slate-700'>
                <div>
                    <Navbar />
                    <Lpane />
                </div>


                <div className=' grid grid-cols-3'>
                    <div className=' grid grid-cols-1'>
                        <RegistrarDash image={require("../assets/imgs/ait_logo.jpg")} title='Certificates' badge='' />
                    </div>

                    <div className=' grid grid-cols-2'>
                        <RegistrarDash image={require("../assets/imgs/ait_logo.jpg")} title='Certificates' badge='' />
                    </div>

                    <div className=' grid grid-cols-2'>
                        <RegistrarDash image={require("../assets/imgs/ait_logo.jpg")} title='Certificates' badge='' />
                    </div>

                </div>
            </div>



        </>
    )
}

export default Registrar
import React from 'react'
import RegistrarDash from '../components/RegistrarDash'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Badges from '../components/Badges'
import Charts from '../components/Charts'
import { Button } from '@mui/material'




function Registrar() {
    const navigate = useNavigate()

    return (
        <div className=' bg-slate-200 h-full'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-4 pt-24 ml-6'>
                <div className=' col-span-3'>
                    <p>HOME / REGISTRAR</p>
                </div>
                <div className=' col-start-5'><Badges /></div>
            </div>

            <div className=' col-span-4 m-6 text-2xl font-bold'>
                <h2>Dashboard</h2>
            </div>

            <div className=' p-6 grid grid-cols-4 gap-4' >
                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../assets/imgs/network.jpg')} title='DEFERMENT APPLICATIONS' />
                </div>
                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../assets/imgs/login_clouds.jpg')} title='CERTIFICATE APPLICATIONS'/>
                </div>
                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../assets/imgs/no-pic.png')} title='TRANSCRIPT APPLICATIONS'/>
                </div>
                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../assets/imgs/login_clouds.jpg')} title='ANNOUNCEMENTS'/>
                </div>
            </div>

            <div className=' col-span-4 m-6 text-2xl font-bold'>
                <h2>Stats</h2>
            </div>

            <div className=' grid grid-cols-3 p-6 gap-3 '>
                <div className=' shadow-xl bg-white p-6 '>
                <p className=' mb-6 font-bold text-blue-700'>REQUESTS PER DAY:</p>
                    <Charts />
                </div>

                <div className=' shadow-xl bg-white p-6 '>
                    <div >
                    <p className=' mb-6 font-bold text-blue-700'>REQUESTS ATTENDED TO:</p>
                        <Charts className=' w-full' />
                    </div>

                </div>

                <div className=' shadow-xl bg-white p-6 '>
                    <div >
                        <p className=' mb-6 font-bold text-blue-700'>TOTAL REQUESTS:</p>
                        <Charts className=' w-full' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Registrar
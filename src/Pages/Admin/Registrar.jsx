import React from 'react'
import RegistrarDash from '../../components/RegistrarDash'
// import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Badges from '../../components/Badges'
import Charts from '../../components/Charts'
import { Link } from '@mui/material'





function Registrar() {

    return (
        <div className=' bg-slate-200 h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-4 pt-24 ml-6'>
                <div className=' col-span-3'>
                    <p>Dashboard</p>
                </div>
                <div className=' col-start-5'>
                    <Badges />
                </div>
            </div>

            <div className=' col-span-4 m-6 text-2xl font-bold'>
                <h2>Stats</h2>
            </div>

            <div className=' grid lg:grid-cols-3 p-6 gap-6 md:grid-cols-2'>
                <div className=' shadow-xl bg-lime-500 p-6 rounded-xl'>
                    <p className=' mb-6 font-bold text-blue-700'>REQUESTS TODAY:</p>
                    <Charts />
                </div>

                <div className=' shadow-xl bg-yellow-400 p-6 rounded-xl'>
                    <div >
                        <p className=' mb-6 font-bold text-blue-700'>REQUESTS ATTENDED TO:</p>
                        <Charts className=' w-full' />
                    </div>

                </div>

                <div className=' shadow-xl bg-white p-6 rounded-xl'>
                    <div >
                        <p className=' mb-6 font-bold text-blue-700'>TOTAL REQUESTS:</p>
                        <Charts className=' w-full' />
                    </div>

                </div>
            </div>
            <div className=' col-span-4 m-6 text-2xl font-bold'>
                <h2>Dashboard</h2>
            </div>

            <div className=' p-6 grid lg:grid-cols-4 gap-4 rounded-lg md:grid-cols-2' >
                <div className=' hover:shadow-xl delay-150'>
                    <Link href="/certapproval">
                        <RegistrarDash image={require('../../assets/imgs/messages.png')} title='DEFERMENT APPLICATIONS' badge={'VIEW'} />
                    </Link>
                </div>

                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../../assets/imgs/3d-documents.png')} title='CERTIFICATE APPLICATIONS' badge={'VIEW'} />
                </div>

                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../../assets/imgs/no-pic.png')} title='TRANSCRIPT APPLICATIONS' badge={'VIEW'} />
                </div>

                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../../assets/imgs/3d-megaphone.png')} title='ANNOUNCEMENTS' badge={'VIEW'} />
                </div>
            </div>


        </div>
    )
}

export default Registrar
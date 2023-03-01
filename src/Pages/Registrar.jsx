import React from 'react'
import RegistrarDash from '../components/RegistrarDash'
import { LinearProgress, Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import Badges from '../components/Badges'
import Charts from '../components/Charts'




function Registrar() {
    return (
        <div className=' bg-slate-200 h-full'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-4 '>
                <div className=' col-span-3'>
                    {/* placing Breadcrumbs Here*/}
                </div>
                <div className=' col-start-5'><Badges /></div>
            </div>

            <div className=' col-span-4 m-6 text-2xl font-bold'>
                <h2>Dashboard</h2>
            </div>

            <div className=' p-6 grid grid-cols-4 gap-4'>
                <div className=' hover:shadow-xl delay-150'><RegistrarDash image={require('../assets/imgs/login_clouds.jpg')} title='DEFERMENT APPLICATIONS' /></div>
                <div className=' hover:shadow-xl delay-150'><RegistrarDash image={require('../assets/imgs/login_clouds.jpg')} title='CERTIFICATE APPLICATIONS' /></div>
                <div className=' hover:shadow-xl delay-150'><RegistrarDash image={require('../assets/imgs/login_clouds.jpg')} title='TRANSCRIPT APPLICATIONS' /></div>
                <div className=' hover:shadow-xl delay-150'><RegistrarDash image={require('../assets/imgs/login_clouds.jpg')} title='ANNOUNCEMENTS' /></div>
            </div>

            <div className=' col-span-4 m-6 text-2xl font-bold'>
                <h2>Stats</h2>
            </div>

            <div className=' grid grid-cols-3 p-6 gap-5'>
                <div className=' p-3 shadow-xl'>
                    REQUESTS PER DAY
                    <div>
                        <Stack spacing={3} flexdirection='row'>
                            <LinearProgress variant='determinate' value={69} />
                            <LinearProgress variant='determinate' value={43} />
                            <LinearProgress variant='determinate' value={40} />
                            <LinearProgress variant='determinate' value={60} />
                            <LinearProgress variant='determinate' value={40} />
                            <LinearProgress variant='determinate' value={94} />
                            <LinearProgress variant='determinate' value={40} />
                            <LinearProgress variant='determinate' value={42} />
                            <LinearProgress variant='determinate' value={84} />
                        </Stack>
                    </div>
                </div>

                <div className=' shadow-xl '>
                    <div>
                         <Charts />
                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default Registrar
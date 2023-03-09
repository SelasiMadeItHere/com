import React from 'react'
import Navbar from '../../components/Navbar'
import { Button, Breadcrumbs, Link } from '@mui/material'



function CertRegistrar() {
    return (
        <div className=' bg-slate-400 h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-4 m-20'>
                <div className=' inline-flex gap-3 pt-3 font-black'>
                    <Breadcrumbs arial-label='breadcrumb'>
                        <Link href='#' underline='hover'>HOME</Link>
                        <Link href='#' underline='hover'>CERTIFICATES</Link>
                        {/* <Link href='#' underline='hover'>DEFERMENT</Link>
                    <Link href='#' underline='hover'>TRANSCRIPT</Link>
                    <Link href='#' underline='hover'></Link> */}
                    </Breadcrumbs>
                </div>
                <div className=' grid col-span-2'></div>

                <div className=' inline-flex gap-3 pt-3'>
                    <Button variant='contained' className=' w-28'>PREVIOUS</Button>
                    <Button variant='contained' className=' w-28' color='secondary'>NEXT</Button>
                </div>
            </div>
        </div>
    )
}

export default CertRegistrar
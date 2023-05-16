import React from 'react'
import Navbar from '../../components/Navbar'
import { Breadcrumbs, Link, IconButton, TableContainer, Table, TableHead, TableBody, TableRow } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';





function CertRegistrar() {
    return (
        <div className=' bg-indigo-100 h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-4 my-20 mx-14'>
                <div className=' inline-flex gap-3 pt-3 text-black '>
                    <Breadcrumbs arial-label='breadcrumb' separator=">">
                        <Link href='/registrar' underline='hover'>HOME</Link>
                        <Link href='#' underline='hover'>CERTIFICATES</Link>
                    </Breadcrumbs>
                </div>

                <div className=' grid col-span-2'></div>

                <div className=' inline-flex gap-3 pt-3 text-right'>
                    <IconButton>
                        <NotificationsIcon className=' text-sky-900' />
                    </IconButton>
                    <IconButton>
                        <MessageIcon className=' text-sky-900' />
                    </IconButton>

                </div>
            </div>


            <TableContainer className=' bg-white mx-6'>
                <Table >
                    <TableHead>

                    </TableHead>
                    <TableBody></TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CertRegistrar
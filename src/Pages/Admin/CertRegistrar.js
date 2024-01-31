import React from 'react'
import Navbar from '../../components/Navbar'
import { Breadcrumbs, Link, IconButton, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';





function CertRegistrar() {

    return (
        <div className=' bg-indigo-100 h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-5 pt-24 mb-12 mx-14'>
                <div className=' inline-flex gap-3 pt-3 text-black '>
                    <Breadcrumbs arial-label='breadcrumb' separator=">">
                        <Link href='/registrar' underline='hover'>HOME</Link>
                        <Link href='#' underline='hover'>CERTIFICATES</Link>
                    </Breadcrumbs>
                </div>

                <div className=' grid col-span-3'></div>

                {/* <div className=' inline-flex gap-3 text-right'>
                    <IconButton>
                        <NotificationsIcon className=' text-sky-900' />
                    </IconButton>
                    <IconButton>
                        <MessageIcon className=' text-sky-900' />
                    </IconButton>

                </div> */}
            </div>


            <div className=' mx-6 '>
                
                <TableContainer className=' bg-white rounded-xl'>
                    <Table >
                        <TableHead className=' text-center'>
                            <TableRow className=' p-2 text-center'>
                                <TableCell></TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ID NO.</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>REQUEST ID</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>NAME</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>CONTACT</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>PROGRAM</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>DELIVERY</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>STATUS</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default CertRegistrar
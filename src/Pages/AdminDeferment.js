import React from 'react'
import Navbar from '../components/Navbar'
import Lpane from '../components/Lpane'
import { Card, Table, TableRow, TableCell, TableHead, TableBody, Button } from '@mui/material'

function AdminDeferment() {
    return (
        <div className='bg-slate-400 grid grid-cols-6 mt-5 h-screen'>
            <div>
                <Navbar />
                <Lpane className='col-span-1'/>   
            </div>

            <div className='m-20 col-span-5'>
                <Card>
                    <h1 className=' text-2xl font-semibold text-center mt-5'>Card Renewal Requests</h1>
                    <Table className='mt-10'>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight: "bolder"}}>ID NUMBER</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>FIRST NAME</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>MIDDLE NAME</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>SURNAME NAME</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>PROGRAM</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>LEVEL</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>CAMPUS</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>ACTION</TableCell>
                                <TableCell style={{fontWeight: "bolder"}}>STATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                            <TableRow>
                                <TableCell>ADS19B00205Y</TableCell>
                                <TableCell>Precious</TableCell>
                                <TableCell>Selasi</TableCell>
                                <TableCell>Agbesi</TableCell>
                                <TableCell>BSc Information Technology</TableCell>
                                <TableCell>400</TableCell>
                                <TableCell>Seaview</TableCell>
                                <TableCell>Unattended To</TableCell>
                                <TableCell className=' h-1 inline'>
                                    <Button className='mt-7' variant="contained">EDIT</Button>
                                    <Button className='mt-7'  style={{color:"red"}} >DELETE</Button>
                                </TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </Card>
            </div>

        </div>
    )
}

export default AdminDeferment
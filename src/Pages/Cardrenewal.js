import React from 'react';
import Navbar from '../components/Navbar';
import Lpane from '../components/Lpane';
import { Card, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';



function Cardrenewal() {
  return (
    <div className=' bg-slate-400 grid grid-cols-8 md:h-full lg:h-screen mt-5'>
      <div>
        <Navbar />
        <Lpane />
      </div>

      <div className='m-20 col-span-7'>
        <Card>
          <h1 className=' text-2xl font-semibold text-center mt-5'>Card Renewal Requests</h1>
          <Table className='mt-10'>
            <TableHead>
              <TableRow>
                <TableCell>ID NUMBER</TableCell>
                <TableCell>FIRST NAME</TableCell>
                <TableCell>MIDDLE NAME</TableCell>
                <TableCell>SURNAME NAME</TableCell>
                <TableCell>PROGRAM</TableCell>
                <TableCell>LEVEL</TableCell>
                <TableCell>CAMPUS</TableCell>
                <TableCell>STATUS</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            
            </TableBody>
          </Table>
        </Card>
      </div>

    </div>
  )
}

export default Cardrenewal
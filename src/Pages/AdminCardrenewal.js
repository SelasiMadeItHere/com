import React from 'react';
import Navbar from '../components/Navbar';
import Lpane from '../components/Lpane';
import { Card, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';



function Cardrenewal() {
  return (
    <div className=' bg-slate-400 grid grid-cols-9 md:h-full lg:h-screen'>
      <div>
        <Navbar />
        <Lpane className='col-span-2'/>
      </div>

      <div className='mt-20 grid col-span-8 col-start-3'>
        <Card>
          <h1 className=' text-2xl font-semibold text-center bg-slate-800 text-white p-6'>Card Renewal Requests</h1>
          <Table className='mt-5'>
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
                <TableCell>fgctff</TableCell>
              </TableRow>
            
            </TableBody>
          </Table>
        </Card>
      </div>

    </div>
  )
}

export default Cardrenewal
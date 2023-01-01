import React from 'react';
import Navbar from '../components/Navbar';
import Lpane from '../components/Lpane';
import { Card, Table, TableHead, TableRow, TableBody, TableCell, Badge } from '@mui/material';



function Cardrenewal() {
  return (
    <div className=' bg-slate-400 grid grid-cols-9 md:h-screen lg:h-screen'>
      <div>
        <Navbar />
        <Lpane className='col-span-2'/>
      </div>

      <div className='mt-20 grid col-span-8 col-start-3 w-[90%] '>
        <Card>
          <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Card Renewal Requests</h1>
          <Table className='mt-5'>
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: "bolder"}}>ID NO.</TableCell>
                <TableCell style={{fontWeight: "bolder"}}>FIRST NAME</TableCell>
                <TableCell style={{fontWeight: "bolder"}}>MIDDLE NAME</TableCell>
                <TableCell style={{fontWeight: "bolder"}}>SURNAME NAME</TableCell>
                <TableCell style={{fontWeight: "bolder"}}>PROGRAM</TableCell>
                <TableCell style={{fontWeight: "bolder"}}>LEVEL</TableCell>
                <TableCell style={{fontWeight: "bolder"}}>CAMPUS</TableCell>
                <TableCell style={{fontWeight: "bolder"}}>STATUS</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* <TableRow>
                <TableCell>fgctff</TableCell>
              </TableRow> */}
            
            </TableBody>
          </Table>
        </Card>
      </div>

    </div>
  )
}

export default Cardrenewal
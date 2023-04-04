import React from 'react'
import Navbar from '../../components/Navbar';
import Lpane from '../../components/Lpane';
import { Card, Table, TableHead, TableRow, TableBody, TableCell, Button } from '@mui/material';


function AdminTranscript() {
  return (
    <div className=' bg-slate-300 grid grid-cols-9 md:h-screen lg:h-full'>
    <div>
        <Navbar />
        <Lpane className='col-span-2' />
    </div>

    <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
        <Card>
            <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Transcripts Requests</h1>
            <Table className='mt-5'>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bolder" }}>ID NO.</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>FIRST NAME</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>MIDDLE NAME</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>SURNAME NAME</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>PROGRAM</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>LEVEL</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>CAMPUS</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>STATUS</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>ACTION</TableCell>
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
                        <TableCell className=' p-3'>
                            <Button className='mt-7' variant="contained">EDIT</Button>
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>

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
                            <Button className='mt-7' style={{ color: "red" }} >DELETE</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    </div>

</div>
  )
}

export default AdminTranscript
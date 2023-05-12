import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Lpane from '../../components/Lpane';
import { Card, Table, TableHead, TableRow, TableBody, TableCell, Button, Stack } from '@mui/material';


function AdminTranscript() {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/gettranscript");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);
  return (
    <div className=' bg-indigo-100 grid grid-cols-9 h-screen pb-12 min-h-screen'>
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
                    <TableCell></TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>ID NO.</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>REQUEST ID</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>NAME</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>CONTACT</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>PROGRAM</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>LEVEL</TableCell>
                        <TableCell style={{ fontWeight: "bolder" }}>DELIVERY</TableCell>
                        {/* <TableCell style={{ fontWeight: "bolder" }}>STATUS</TableCell> */}
                        <TableCell style={{ fontWeight: "bolder" }}>ACTION</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody className='text-sm'>
                            {data.map((item, index) => {
                                return (
                                    <tr key={item.id} className=' border p-12'>
                                        <th scope="row">  {index + 1}</th>
                                        <td className=' text-center p-3 border-y'>{item.stuid}</td>
                                        <td className=' text-center p-3 border-y'>{item.reqid}</td>
                                        <td className=' text-center p-3 border-y'>{item.name}</td>       
                                        <td className=' text-center p-3 border-y'>{item.phone}</td>
                                        <td className=' text-center p-3 border-y'>{item.prog}</td>
                                        <td className=' text-center p-3 border-y'>{item.level}</td>
                                        <td className=' text-center p-3 border-y'>{item.deliv_mode}</td>
                                        <td className=' text-center p-3 border-y'>
                                            <Stack direction='row' className=' gap-2'>
                                                <Button variant='outlined' >VIEW</Button>
                                                <Button variant='contained' color='primary'>FORWARD</Button>
                                                {/* <Button variant='contained' color='error'>DELETE</Button> */}
                                            </Stack>
                                        </td>
                                    </tr>
                                )
                            })}
                        </TableBody>
            </Table>
        </Card>
    </div>

</div>
  )
}

export default AdminTranscript
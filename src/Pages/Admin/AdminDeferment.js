import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Lpane from '../../components/Lpane'
import DefermentModal from '../../components/DefermentModal'
import { Card, Table, TableRow, TableCell, TableHead, TableBody, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


function AdminDeferment() {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/getdeferment");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className='bg-indigo-100 grid grid-cols-9 h-screen pb-12 min-h-screen'>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>

            <div className='grid col-start-3 col-span-9 col-end-9 mt-28'>
                <Card>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Deferment Requests</h1>
                    <Table>
                        <TableHead className=' pt-12 text-white' >
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>ID NO.</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} >LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>CURRENT SEMESTER</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>DATE</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>DEFERMENT ID</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>ACTION</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody className='text-sm'>
                            {data.map((item, index) => {
                                return (
                                    <tr key={item.id} className=' border p-12'>
                                        <th scope="row">  {index + 1}</th>
                                        <td className=' text-center p-3 border-y'>{item.stuid}</td>
                                        <td className=' text-center p-3 border-y'>{item.clevel}</td>
                                        <td className=' text-center p-3 border-y'>{item.csem}</td>
                                        <td className=' text-center p-3 border-y'>{item.date}</td>
                                        <td className=' text-center p-3 border-y'>{item.defid}</td>
                                        <td className=' text-center p-3 border-y'>
                                            <Stack direction='row' className=''>
                                                <DefermentModal item={item} />
                                                <IconButton>
                                                    <SendIcon variant='contained' color='primary' />
                                                </IconButton>
                                                <IconButton variant='contained' color='error'>
                                                    <DeleteIcon />
                                                </IconButton>
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

export default AdminDeferment;
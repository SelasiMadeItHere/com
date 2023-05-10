import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Lpane from '../../components/Lpane'
import { Card, Table, TableRow, TableCell, TableHead, TableBody, Button, Stack } from '@mui/material'

function AdminDeferment() {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/get");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className='bg-indigo-100 grid grid-cols-5 h-full min-h-screen'>
            <div>
                <Navbar />
                {/* <Lpane className='col-span-2' /> */}
            </div>

            <div className='grid col-span-4 w-[100%] col-start-2 col-end-4 mt-28'>
                <Card>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Deferment Requests</h1>
                    <Table className='mt-5'>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bolder" }}>ID NO.</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>SEMESTER</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>SURNAME</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>PROGRAM</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>CAMPUS</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>STATUS</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>ACTION</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        {/* <th scope="row">  {index + 1}</th> */}
                                        <td className=' text-center p-3'>{item.stuid}</td>
                                        <td className=' text-center p-3'>{item.clevel}</td>
                                        <td className=' text-center p-3'>{item.csem}</td>
                                        <td className=' text-center p-3'>{item.defyear}</td>
                                        <td className=' text-center p-3'>{item.retyear}</td>
                                        <td className=' text-center p-3'>{item.prevdef}</td>
                                        <td className=' text-center p-3'>{item.reason}</td>
                                        <td className=' text-center p-3'>{item.date}</td>
                                        <td className=' text-center p-3'>{item.defid}</td>
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

export default AdminDeferment
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Lpane from '../../components/Lpane'
import { Card, Table, TableRow, TableCell, TableHead, TableBody, Button, Stack} from '@mui/material'

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
        <div className='bg-indigo-100 grid grid-cols-9 h-screen pb-12 min-h-screen'>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>

            <div className='grid col-start-3 col-span-9 col-end-9 mt-28'>
                <Card>
                    <Table>
                        <TableHead className='bg-gray-900' style={{ color: 'white' }}>
                            <TableRow className=''>
                                <TableCell></TableCell>
                                <TableCell  >ID NO.</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>CURRENT SEMESTER</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>DEFERMENT YEAR</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>RETURNING YEAR</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>PREVIOUS DEFERMENT</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>REASON</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>DATE</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>DEFERMENT ID</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>ACTION</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody className='text-sm'>
                            {data.map((item, index) => {
                                return (
                                    <tr key={item.id} className=' border '>
                                        <th scope="row">  {index + 1}</th>
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
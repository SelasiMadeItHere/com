import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../components/Navbar'
import Lpane from '../../components/Lpane'
import { Card, Table, TableHead, TableRow, TableBody, TableCell, Stack, IconButton, } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete'
import IntroductoryModal from '../../components/IntroductoryModal'




function IntroductoryLetter() {

    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/getIntro");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);


    const handleDeleteIntro = (reqid) => {
        if (window.confirm("Are you sure you want to Delete this record?")) {
            axios.delete(`http://localhost:5002/api/delete/${reqid}`);
            alert('RECORD DELETED SUCCESSFULY')
            setTimeout(() => loadData(), 500)
        }
        else {
            console.log(console.error)
        }
    }





    return (
        <div className=' bg-indigo-100 grid grid-cols-9 h-screen pb-12 min-h-screen'>
            <div>
                <Navbar />
                <Lpane />
            </div>

            <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                <Card>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Introductory Letter Requests</h1>
                    <Table className='mt-5'>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ID NO.</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>REQUEST ID</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>PHONE</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>REASON</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>PASSPORT</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>RESIDENCY</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>BANK NAME</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>RECEIPT</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>DATE</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ACTION</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody className='text-sm'>
                            {data.map((introl, index) => {
                                return (
                                    <tr key={introl.id} className=' border p-12'>
                                        <th scope="row">  {index + 1}</th>
                                        <td className=' text-center p-3 border-y'>{introl.stuid}</td>
                                        <td className=' text-center p-3 border-y'>{introl.reqid}</td>
                                        <td className=' text-center p-3 border-y'>{introl.phone}</td>
                                        <td className=' text-center p-3 border-y'>{introl.for}</td>
                                        <td className=' text-center p-3 border-y'>{introl.pnumber}</td>
                                        <td className=' text-center p-3 border-y'>{introl.raddress}</td>
                                        <td className=' text-center p-3 border-y'>{introl.bname}</td>
                                        <td className=' text-center p-3 border-y'>{introl.bname}</td>
                                        <td className=' text-center p-3 border-y'></td>
                                        <td className=' text-center p-3 border-y'>
                                            <Stack direction='row' className=''>
                                                <IntroductoryModal introl={introl} />
                                                <IconButton>
                                                    <SendIcon variant='contained' color='primary' />
                                                </IconButton>
                                                <IconButton variant='contained' color='error' onClick={handleDeleteIntro}>
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

export default IntroductoryLetter
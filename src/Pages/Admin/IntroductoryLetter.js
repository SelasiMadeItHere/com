import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Lpane from '../../components/Lpane'
import { Card, Table, TableHead, TableRow, TableBody, TableCell, Stack, IconButton, TablePagination} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import IntroductoryModal from '../../components/IntroductoryModal'
import IDCardView from '../../components/IDCardView'






function IntroductoryLetter() {

    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/getIntro");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <>
            <div className=' grid grid-cols-9 h-screen pb-12 min-h-screen'>
                <div>
                    <Navbar />
                    <Lpane />
                </div>

                <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                    <Card className='my-12'>
                        <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Introductory Letter Requests</h1>
                        <Table className=''>
                            <TableHead>
                                <TableRow>
                                    <TableCell className=' border-2'></TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>ID NO.</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>REQUEST ID</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>PHONE</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>RECEIPT</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'> DATE</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2 items-center'>ACTION</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody className='text-sm'>
                                {data.map((introl, index) => {
                                    return (
                                        <tr key={introl.id} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-center p-3 border-2'>{introl.stuid}</td>
                                            <td className=' text-center p-3 border-2'>{introl.rqst_id}</td>
                                            <td className=' text-center p-3 border-2'>{introl.phone}</td>
                                            <td className=' text-center p-3 border-2'>{introl.for}</td>
                                            <td className=' text-center p-3 border-2'>{new Date(introl.created_at).toISOString().slice(0, 10)}</td>
                                            <td className=' text-center p-3 border-2'>
                                                <Stack direction='row' className=' items-center'>
                                                    <IntroductoryModal introl={introl} />

                                                    <IconButton>
                                                        <ThumbUpIcon variant='contained' color='primary' />
                                                    </IconButton>
                                                    <IconButton variant='contained' color='error'
                                                    // onClick={handleDeleteIntro}
                                                    >
                                                        <ThumbDownIcon />
                                                    </IconButton>
                                                </Stack>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </TableBody>
                        </Table>
                        <TablePagination className=' bottom-0'
                            rowsPerPageOptions={[10, 15, 25, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage} />
                    </Card>
                </div>
            </div>
        </>

    )
}

export default IntroductoryLetter
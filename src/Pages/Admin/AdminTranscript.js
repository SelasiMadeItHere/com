import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import TranscriptModal from '../../components/TranscriptModal';
// import DefermentModal from '../../components/DefermentModal'
import Lpane from '../../components/Lpane';
import { Card, TableContainer, Table, TableHead, TableRow, TableBody, TablePagination, TableCell, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


function AdminTranscript() {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/gettranscript");
        setData(response.data);
    };
    useEffect(() => {
        loadData( );
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

    const handleDelete = (reqid) => {
        if (window.confirm("Are you sure you want to Delete this record?")) {
            axios.delete(`http://localhost:5002/api/delete/${reqid}`);
            // toast.success('RECORD DELETED SUCCESSFULY');
            setTimeout(() => loadData(), 500)
        }
    }


    return (
        <div className=' bg-indigo-100 grid grid-cols-9 h-screen pb-12 min-h-screen'>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>

            <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                <Card>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Transcripts Requests</h1>
                    <TableContainer>
                        <Table className='mt-5'>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ID NO.</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>REQUEST ID</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>NAME</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>CONTACT</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>PROGRAM</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>LEVEL</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>DELIVERY</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>STATUS</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ACTION</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody className='text-sm'>
                                {data.map((trans, index) => {
                                    return (
                                        <tr key={trans.stuid} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-center p-3 border-y'>{trans.stuid}</td>
                                            <td className=' text-center p-3 border-y'>{trans.reqid}</td>
                                            <td className=' text-center p-3 border-y'>{trans.prog}</td>
                                            <td className=' text-center p-3 border-y'>{trans.phone}</td>
                                            <td className=' text-center p-3 border-y'>{trans.prog}</td>
                                            <td className=' text-center p-3 border-y'>{trans.level}</td>
                                            <td className=' text-center p-3 border-y'>{trans.deliv_mode}</td>
                                            <td className=' text-center p-3 border-y'></td>
                                            <td className=' text-center p-3 border-y'>
                                                <Stack direction='row' className=''>
                                                    <TranscriptModal trans={trans} />
                                                    <IconButton>
                                                        <SendIcon variant='contained' color='primary' />
                                                    </IconButton>
                                                    <IconButton variant='contained' color='error'onClick={() => handleDelete(trans.reqid)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Stack>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
    )
}

export default AdminTranscript
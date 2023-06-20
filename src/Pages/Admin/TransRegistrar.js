import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../../components/Navbar';
import TranscriptModal from '../../components/TranscriptModal';
import { Breadcrumbs, Link, IconButton, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Stack, TablePagination, Card } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Alert from '@mui/material/Alert'





function TransRegistrar() {
    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/gettranscript");
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

    const fintoregtrans = (reqid) => {
        axios
            .post('http://localhost:5002/api/transcript/finapprove', { reqid })
            .then((response) => {
                console.log(response.data);
                setAlertSeverity('success');
                setAlertMessage('Status updated successfully.');
                setShowAlert(true);
                loadData();
            })
            .catch((error) => {
                console.error(error);
                setAlertSeverity('error');
                setAlertMessage('Failed to update status.');
                setShowAlert(true);
            });
    };




    return (
        <div className=' bg-indigo-100 h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-5 pt-24 mb-12 mx-14'>
                <div className=' inline-flex gap-3 pt-3'>
                    <Breadcrumbs arial-label='breadcrumb' separator=">">
                        <Link href='/registrar' underline='hover' className=' font-semibold'>HOME</Link>
                        <p href='#' className=' font-bold'>TRANSCRIPT</p>
                    </Breadcrumbs>
                </div>

                <div className=' grid col-span-3'></div>

                <div className=' inline-flex gap-3 text-right'>
                    <IconButton>
                        <NotificationsIcon className=' text-sky-900' />
                    </IconButton>
                    <IconButton>
                        <MessageIcon className=' text-sky-900' />
                    </IconButton>

                </div>
            </div>


            <div className=' mx-16'>
                <Card>
                <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Transcripts Requests</h1>
                    <TableContainer >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: "bolder",}} className=' border-2'>SN</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>ID NO.</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>REQUEST ID</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>CONTACT</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>PROGRAM</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>LEVEL</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>DELIVERY</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>STATUS</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>ACTION</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody className='text-sm'>
                                {data.map((trans, index) => {
                                    return (
                                        <tr key={trans.reqid} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-center p-3 border-2'>{trans.stuid}</td>
                                            <td className=' text-center p-3 border-2'>{trans.reqid}</td>
                                            <td className=' text-center p-3 border-2'>{trans.phone}</td>
                                            <td className=' text-center p-3 border-2'>{trans.prog}</td>
                                            <td className=' text-center p-3 border-2'>{trans.level}</td>
                                            <td className=' text-center p-3 border-2'>{trans.deliv_mode}</td>
                                            <td className=' text-center p-3 border-2'>{trans.state}</td>
                                            <td className=' text-center p-3 border-y'>
                                                <Stack direction='row' className=''>
                                                    <TranscriptModal trans={trans} />
                                                    <IconButton>
                                                        <ThumbUpIcon variant='contained' color='primary' onClick={() => fintoregtrans(trans.reqid)} />
                                                    </IconButton>
                                                    <IconButton>
                                                        <ThumbDownIcon color='error' />
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
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </div>

            <div className=' col-span-2 m-6'>
                {showAlert && (
                    <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
                        {alertMessage}
                    </Alert>
                )}
            </div>
        </div>

    )
}

export default TransRegistrar;
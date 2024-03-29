import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import TranscriptModal from '../../components/TranscriptModal';
import Lpane from '../../components/Lpane';
import { Card, TableContainer, Table, TableHead, TableRow, TableBody, TablePagination, TableCell, IconButton, Stack } from '@mui/material';
import Alert from '@mui/material/Alert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ThumbDown } from '@mui/icons-material';
import config from '../../Middleware/apiConfig';


function AdminTranscript() {

    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');


    const loadData = async () => {
        const response = await axios.get(`${config.backendUrl}/api/gettranscript`);
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

    const fintoregtrans = (rqst_id) => {
        axios
            .post(`${config.backendUrl}/api/transcript/finapprove`, { rqst_id })
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

    const finrejtoregtrans = (rqst_id) => {
        axios
            .post(`${config.backendUrl}/api/transcript/finapprove`, { rqst_id })
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
        <div className=' grid grid-cols-9 h-screen pb-12 min-h-screen'>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>

            <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                <Card className='my-12 drop-shadow-2xl'>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Transcripts Requests</h1>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className=' border-2'>SN</TableCell>
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
                                        <tr key={trans.rqst_id} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-center p-3 border-2'>{trans.stuid}</td>
                                            <td className=' text-center p-3 border-2'>{trans.rqst_id}</td>
                                            <td className=' text-center p-3 border-2'>{trans.phone}</td>
                                            <td className=' text-center p-3 border-2'>{trans.prog}</td>
                                            <td className=' text-center p-3 border-2'>{trans.level}</td>
                                            <td className=' text-center p-3 border-2'>{trans.deliv_mode}</td>
                                            <td className=' text-center p-3 border-2'>{trans.status}</td>
                                            <td className=' text-center p-3 border-y'>
                                                <Stack direction='row' className=''>
                                                    <TranscriptModal trans={trans} />
                                                    <IconButton onClick={() => fintoregtrans(trans.rqst_id)}>
                                                        <ThumbUpIcon variant='contained' color='primary' />
                                                    </IconButton>
                                                    <IconButton onClick={() => finrejtoregtrans(trans.rqst_id)}>
                                                        <ThumbDown color='error' />
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
            <div className=' col-span-6'></div>
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

export default AdminTranscript
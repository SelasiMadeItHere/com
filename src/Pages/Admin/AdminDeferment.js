import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Lpane from '../../components/Lpane';
// import DefermentModal from '../../components/DefermentModal';
import axios from 'axios';
import { Card, Table, TableHead, TableRow, TableBody, TableCell, TablePagination, IconButton, Stack } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FinanceDeferModal from '../../components/FinanceDeferModal';
import Alert from '@mui/material/Alert'
// import BadgeIcon from '@mui/icons-material/Badge';



function AdminDeferment() {

    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/getdeferment");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);


    const fintoreg = (rqst_id) => {
        axios
            .post('http://localhost:5002/api/deferment/finapprove', { rqst_id })
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


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDeleteCard = (rqst_id) => {
        axios.post(`http://localhost:5002/api/deferments/rejects`, { rqst_id })
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
    }


    return (
        <div className=' bg-white grid grid-cols-9 h-full   '>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>

            <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                <Card className='my-12 drop-shadow-2xl'>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6 '>DEFERMENT REQUESTS</h1>
                    <Table className='mt-5 overflow-y-auto' sx={{ maxHeight: '10vh' }}>
                        <TableHead className=' text-center'>
                            <TableRow >
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2 mx-12'></TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2'>REQUEST ID</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2'>STUDENT ID</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2'>LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2'>CURRENT SEMESTER</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2 flex-wrap'>DEF. SEMESTER</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2'>REASON</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' text-center border-2'>STATUS</TableCell>

                                <TableCell style={{ fontWeight: "bolder" }} className=' border grid grid-cols-2'>ACTION</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map((fdef, index) => {
                                return (
                                    <tr key={fdef.ID} className=' border p-12'>
                                        <th scope="row">  {index + 1}</th>
                                        <td className=' text-center p-3 border-2'>{fdef.rqst_id}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.stuid}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.clevel}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.csem}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.defsem}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.reason}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.status}</td>
                                        <td className=' text-center p-3 border-y'>
                                            <Stack direction='row' className=''>
                                                <FinanceDeferModal fdef={fdef} />
                                                <IconButton onClick={() => fintoreg(fdef.rqst_id)}>
                                                    <ThumbUpIcon variant='contained' color='primary' />
                                                </IconButton>
                                                <IconButton variant='contained' color='error' onClick={() => handleDeleteCard(fdef.rqst_id)}>
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
            <div className=' col-span-4'></div>
            <div className=' col-span-3 m-6'>
                {showAlert && (
                    <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
                        {alertMessage}
                    </Alert>
                )}
            </div>
        </div>

    )
}

export default AdminDeferment
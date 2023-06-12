import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../../components/Navbar';
// import DefermentModal from '../../components/DefermentModal'
import { Breadcrumbs, Link, IconButton, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Stack, TablePagination } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbUp';
import Alert from '@mui/material/Alert'





function TransRegistrar() {
    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        loadData();
    }, []);

    const fintoregtrans = (stuid) => {
        axios
            .post('http://localhost:5002/api/transcript/finapprove', { stuid })
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

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/getfinanceapprovedtranscripts");
        setData(response.data);
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
    return (
        <div className=' bg-indigo-100 h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-5 pt-24 mb-12 mx-14'>
                <div className=' inline-flex gap-3 pt-3 text-black '>
                    <Breadcrumbs arial-label='breadcrumb' separator=">">
                        <Link href='/registrar' underline='hover'>HOME</Link>
                        <Link href='#' underline='hover'>TRANSCRIPT</Link>
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


            <div className=' mx-6 '>

                <TableContainer className=' bg-white rounded-xl'>
                    <Table >
                        <TableHead className=' text-center'>
                            <TableRow className=' p-2 text-center'>
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
                        <TableBody>
                            {data.map((trans, index) => {
                                return (
                                    <tr key={trans.id} className=' border p-12 text-md'>
                                        <th scope="row">  {index + 1}</th>
                                        <td className=' text-center p-3 border'>{trans.stuid}</td>
                                        <td className=' text-center p-3 border'>{trans.clevel}</td>
                                        <td className=' text-center p-3 border'>{trans.csem}</td>
                                        <td className=' text-center p-3 border'>{new Date(trans.date).toISOString().slice(0, 10)}</td>
                                        <td className=' text-center p-3 border'>{trans.defid}</td>
                                        <td className=' text-center p-3 border'>{trans.status}</td>
                                        <td className=' text-center p-3 border'>
                                            <Stack direction='row' className=''>
                                                <DefermentModal trans={trans} />
                                                <IconButton>
                                                    <ThumbUpIcon variant='contained' color='primary'
                                                        onClick={() => fintoregtrans(trans.trans)} />
                                                </IconButton>

                                                <IconButton variant='contained' color='error'
                                                onClick={() => handleDelete(fdef.defid)}
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
                </TableContainer>
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
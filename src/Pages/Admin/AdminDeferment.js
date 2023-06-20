import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Lpane from '../../components/Lpane';
// import DefermentModal from '../../components/DefermentModal';
import axios from 'axios';
import { Card, Table, TableHead, TableRow, TableBody, TableCell, TablePagination, IconButton, Stack, Button, Link,  } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FinanceDeferModal from '../../components/FinanceDeferModal';
import Alert from '@mui/material/Alert'
import BadgeIcon from '@mui/icons-material/Badge';



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


    const fintoreg = (defid) => {
        axios
            .post('http://localhost:5002/api/deferment/finapprove', { defid })
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

    const handleDeleteCard = (ID) => {
        if (window.confirm("Are you sure you want to Delete this record?")) {
            axios.delete(`http://localhost:5002/api/deleteCard/${ID}`);
            alert('RECORD DELETED SUCCESSFULY')
            setTimeout(() => loadData(), 500)
        }
        else {
            console.log(console.error)
        }
    }


    return (
        <div className=' bg-white grid grid-cols-9 h-full   '>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>

            <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                <div className=' col-span-full grid'>
                    <div className=' col-start-2 pt-6'>
                        <Link to="/finishedcards">
                            <Button variant='contained' className=' px-6' startIcon={<BadgeIcon />}> PROCESSED REQUESTS</Button>
                        </Link>
                    </div>

                    <div className=' col-start-8 pt-6'>
                        <Link to="/finishedcards">
                            <Button variant='contained' color='error' className=' px-6' startIcon={<BadgeIcon />}> CANCELLED REQUESTS</Button>
                        </Link>
                    </div>

                </div>
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
                                        <td className=' text-center p-3 border-2'>{fdef.defid}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.stuid}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.clevel}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.csem}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.defsem}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.reason}</td>
                                        <td className=' text-center p-3 border-2'>{fdef.status}</td>
                                        <td className=' text-center p-3 border-y'>
                                            <Stack direction='row' className=''>
                                                <FinanceDeferModal fdef={fdef}/>
                                                <IconButton onClick={() => fintoreg(fdef.defid)}>
                                                    <ThumbUpIcon variant='contained' color='primary' />
                                                </IconButton>
                                                <IconButton variant='contained' color='error' onClick={() => handleDeleteCard(fdef.ID)}>
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
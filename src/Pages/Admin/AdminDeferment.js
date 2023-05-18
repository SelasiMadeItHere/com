import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Lpane from '../../components/Lpane'
import DefermentModal from '../../components/DefermentModal'
import { Card, Table, TableRow, TableCell, TableHead, TableBody, TableContainer, IconButton, Stack, TablePagination } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert'



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
            .post('http://localhost:5002/api/deferment/finance-approve', { defid })
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


    // const handleDelete = (defid) => {
    //     if (window.confirm("Are you sure you want to Delete this record?")) {
    //         axios.delete(`http://localhost:5002/api/delete/${defid}`);
    //         toast.success('RECORD DELETED SUCCESSFULY');
    //         setTimeout(() => loadData(), 500)
    //     }
    // }


    return (
        <div className='bg-indigo-100 grid grid-cols-9 h-screen pb-12 min-h-screen'>
            <div>

                <Navbar />
                <Lpane className='col-span-2' />
            </div>
            

            <div className='grid col-start-3 col-span-9 col-end-9 mt-28'>
            {showAlert && (
                <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
                    {alertMessage}
                </Alert>
            )}
                <Card>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Deferment Requests</h1>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ID NO.</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} >LEVEL</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>CURRENT SEMESTER</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>DATE</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>DEFERMENT ID</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>STATUS</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }}>ACTION</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody className='text-sm'>
                                {data.map((item, index) => {
                                    return (
                                        <tr key={item.id} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-center p-3 border'>{item.stuid}</td>
                                            <td className=' text-center p-3 border'>{item.clevel}</td>
                                            <td className=' text-center p-3 border'>{item.csem}</td>
                                            <td className=' text-center p-3 border'>{new Date(item.date).toISOString().slice(0, 10)}</td>
                                            <td className=' text-center p-3 border'>{item.defid}</td>
                                            <td className=' text-center p-3 border'>{item.status}</td>
                                            <td className=' text-center p-3 border'>
                                                <Stack direction='row' className=''>
                                                    <DefermentModal item={item} />
                                                    <IconButton>
                                                        <SendIcon variant='contained' color='primary'
                                                            onClick={() => fintoreg(item.defid)} />
                                                    </IconButton>
                                                    {/* <IconButton variant='contained' color='error' onClick={() => handleDelete(item.defid)}>
                                                        <DeleteIcon />
                                                    </IconButton> */}
                                                </Stack>
                                            </td>
                                        </tr>
                                    )
                                })}



                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination className=' top-auto'
                        rowsPerPageOptions={[10, 15, 25, 50, 100]}
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

export default AdminDeferment;
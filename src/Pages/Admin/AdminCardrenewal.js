import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Lpane from '../../components/Lpane';
import IDCardView from '../../components/IDCardView';
import axios from 'axios';
import {
    Card, Table, TableHead, TableRow, TableBody, TableCell, TablePagination,
    IconButton, Stack, Button
} from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Alert from '@mui/material/Alert'
import BadgeIcon from '@mui/icons-material/Badge';


// import { toast } from 'react-toastify';



function Cardrenewal() {

    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/getCard");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const finished = (rqst_id) => {
        axios
            .post('http://localhost:5002/api/cards/updatecards', { rqst_id })
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

    const rejected = (rqst_id) => {
        axios
            .post('http://localhost:5002/api/cards/rejectedcards', { rqst_id })
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

    // const handleDeleteCard = (ID) => {
    //     if (window.confirm("Are you sure you want to Delete this record?")) {
    //         axios.delete(`http://localhost:5002/api/deleteCard/${ID}`);
    //         alert('RECORD DELETED SUCCESSFULY')
    //         setTimeout(()=>loadData(),500)
    //     }
    //     else{
    //         console.log(console.error)
    //     }}


    return (
        <div className=' bg-white h-full relative'>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>


            <div className='grid grid-cols-9'>

                <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                    <div className=' col-span-full grid'>

                        <div className=' col-span-4'></div>
                        <div className=' col-span-3 m-2'>
                            {showAlert && (
                                <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
                                    {alertMessage}
                                </Alert>
                            )}
                        </div>
                    </div>



                    <Card className='my-12 drop-shadow-2xl'>
                        <h1 className=' text-2xl font-semibold text-center w-full bg-sky-800 text-white p-6' >Card Renewal Requests</h1>
                        <Table className='mt-5 overflow-y-auto' sx={{ maxHeight: '10vh' }}>
                            <TableHead className=' text-center'>
                                <TableRow >
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'></TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>ID NO.</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>CAMPUS</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>SERVICE</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>TRACKING ID</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border text-center'>ACTION</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody >
                                {data.map((card, index) => {
                                    return (
                                        <tr key={card.stuid} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-left p-3 border'>{card.stuid}</td>
                                            <td className=' text-left p-3 border'>{card.campus}</td>
                                            <td className=' text-left p-3 border'>{card.service}</td>
                                            <td className=' text-left p-3 border'>{card.rqst_id}</td>

                                            <td className=' text-center p-3 border-y'>
                                                <Stack direction='row' className=''>
                                                    <IDCardView card={card} />

                                                    <IconButton
                                                        onClick={() => finished(card.rqst_id)}>
                                                        <ThumbUpIcon variant='contained' color='success' />
                                                    </IconButton>

                                                    <IconButton variant='contained' color='error' onClick={()=>rejected(card.rqst_id)}>
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


        </div>
    )
}

export default Cardrenewal
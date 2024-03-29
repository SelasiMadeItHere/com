import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Lpane from '../../components/Lpane';
import IDCardView from '../../components/IDCardView';
import axios from 'axios';
import { Card, Table, TableHead, TableRow, TableBody, TableCell, TablePagination } from '@mui/material';
import config from '../Middleware/apiConfig';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import Alert from '@mui/material/Alert'

function FinishedDeferment() {

    const [data, setData] = useState([]);
    // const [showAlert, setShowAlert] = useState(false);
    // const [alertSeverity, setAlertSeverity] = useState('success');
    // const [alertMessage, setAlertMessage] = useState('');


    const loadData = async () => {
        const response = await axios.get(`${config.backendUrl}/api/finisheddeferment`);
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
        <div>
            <div className=' bg-white grid grid-cols-9 h-full   '>
                <div>
                    <Navbar />
                    <Lpane className='col-span-2' />
                </div>


                <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                    <Card className='my-12 drop-shadow-2xl'>
                        <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6 '>Processed Card Requests</h1>
                        <Table className='mt-5 overflow-y-auto' sx={{ maxHeight: '10vh' }}>
                            <TableHead className=' text-center'>
                                <TableRow >
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>  </TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>ID NO.</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>CAMPUS</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>SERVICE</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border'>TRACKING ID</TableCell>
                                    <TableCell style={{ fontWeight: "bolder" }} className=' border grid grid-cols-2'>ACTION</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data.map((defid, index) => {
                                    return (
                                        <tr key={defid.ID} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-left p-3 border'>{defid.ID}</td>
                                            <td className=' text-left p-3 border'>{defid.campus}</td>
                                            <td className=' text-left p-3 border'>{defid.service}</td>
                                            <td className=' text-left p-3 border'>{defid.rqst_id}</td>

                                            <td className=' text-center p-3 border-y'>

                                                <IDCardView card={card} />

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

            {/* <div className=' col-span-4'></div>
            <div className=' col-span-3 m-6'>
                {showAlert && (
                    <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
                        {alertMessage}
                    </Alert>
                )}
            </div> */}
        </div>
    )
}

export default FinishedCards
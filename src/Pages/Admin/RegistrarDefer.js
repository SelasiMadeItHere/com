import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Stack from '@mui/material/Stack';
// import SendIcon from '@mui/icons-material/Send'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Navbar from '../../components/Navbar'
import { Breadcrumbs, Link, IconButton, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
// import FinanceDeferModal from '../../components/FinanceDeferModal';
import Alert from '@mui/material/Alert'





function RegistrarDefer() {
    useEffect(() => {
        loadData( );
    }, []);
    
    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/reggetdeferment");
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
        <div className=' bg-indigo-100 h-screen min-h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-5 pt-24 mb-12 mx-14'>
                <div className=' inline-flex gap-3 pt-3 text-black '>
                    <Breadcrumbs arial-label='breadcrumb' separator=">">
                        <Link href='/registrar' underline='hover'>HOME</Link>
                        <Link href='#' underline='hover'>DEFERMENT</Link>
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


            <div className=' mx-20 '>
            <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Deferment Requests</h1>
                <TableContainer className=' bg-white rounded-xl'>
                    <Table >
                        <TableHead className=' text-center text-white'>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>ID NO.</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>CURRENT SEMESTER</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>DEFFERING SEMESTER   </TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>DEFFERING YEAR</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>DATE</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>REQUEST ID</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>STATUS</TableCell>
                                <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border'>ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                    {data.map((fdef, index) => {
                                        return (
                                            <tr key={fdef.defid} className=' border p-12'>
                                                <th scope="row">  {index + 1}</th>
                                                <td className=' text-center p-3 border'>{fdef.stuid}</td>
                                                <td className=' text-center p-3 border'>{fdef.clevel}</td>
                                                <td className=' text-center p-3 border'>{fdef.csem}</td>
                                                <td className=' text-center p-3 border'>{fdef.defsem}</td>
                                                <td className=' text-center p-3 border'>{fdef.defyear}</td>
                                                <td className=' text-center p-3 border'>{new Date(fdef.created_at).toISOString().slice(0, 10)}</td>
                                                <td className=' text-center p-3 border'>{fdef.defid}</td>
                                                <td className=' text-center p-3 border'>{fdef.status}</td>
                                                <td className=' text-center p-3 border'>
                                                    <Stack direction='row' >
                                                        <IconButton>
                                                            {/* <FinanceDeferModal fdef={fdef}/> */}
                                                        </IconButton>
                                                        <IconButton >
                                                            <ThumbUpIcon color='primary'/>
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

export default RegistrarDefer
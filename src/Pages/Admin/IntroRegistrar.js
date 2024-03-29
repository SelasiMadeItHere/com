// import React, { useEffect, useState } from 'react'
// import Navbar from '../../components/Navbar'
// import axios from 'axios'
// import { Alert, Breadcrumbs, Link, IconButton, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Stack, TablePagination } from '@mui/material'
// import ThumbDownIcon from '@mui/icons-material/ThumbDown'
// import ThumbUpIcon from '@mui/icons-material/ThumbUp'
// import IntroductoryModal from '../../components/IntroductoryModal'





// function IntroRegistrar() {

//     const [data, setData] = useState([]);
//     const [showAlert, setShowAlert] = useState(false);
//     const [alertSeverity, setAlertSeverity] = useState('success');
//     const [alertMessage, setAlertMessage] = useState('');


//     const loadData = async () => {
//         try {
//             const response = await axios.get("http://${config.backendUrl}/api/Intro/getfinapproved");
//             setData(response.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             // Optionally, you can set an error state here and display an error message in your component
//         }
//     };
//     useEffect(() => {
//         loadData();
//     }, []);

//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     const regapproved = (rqst_id) => {
//         axios
//             .post('http://${config.backendUrl}ndUrl}/api/Intro/regapprove', { rqst_id })
//             .then((response) => {
//                 console.log(response.data);
//                 setAlertSeverity('success');
//                 setAlertMessage('Status updated successfully.');
//                 setShowAlert(true);
//                 loadData();
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setAlertSeverity('error');
//                 setAlertMessage('Failed to update status.');
//                 setShowAlert(true);
//             });
//     };


//     return (
//         <div className=' bg-indigo-100 h-screen'>
//             <div>
//                 <Navbar />
//             </div>

//             <div className=' grid grid-cols-5 pt-24 mb-12 mx-14'>
//                 <div className=' inline-flex gap-3 pt-3 text-black '>
//                     <Breadcrumbs arial-label='breadcrumb' separator=">">
//                         <Link href='/registrar' underline='hover'>HOME</Link>
//                         <p>INTRODUCTORY LETTER</p>
//                     </Breadcrumbs>
//                 </div>

//                 {/* <div className=' grid col-span-3'></div> */}
//             </div>


//             <div className=' mx-6 '>

//                 <TableContainer className=' bg-white rounded-xl table-fixed'>
//                 <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6'>Introductory Letter Requests</h1>

//                     <Table >
//                         <TableHead className=' text-center'>
//                             <TableRow className=' p-2 text-center'>
//                                 <TableCell className=' border-2'></TableCell>
//                                 <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>ID NO.</TableCell>
//                                 <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>REQUEST ID</TableCell>
//                                 <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>PHONE</TableCell>
//                                 <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>RECEIPT</TableCell>
//                                 <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'> DATE</TableCell>
//                                 <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2 items-center'>ACTION</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {data.map((introl, index) => {
//                                 return (
//                                     <tr key={introl.id} className=' border p-12'>
//                                         <th scope="row">  {index + 1}</th>
//                                         <td className=' text-center p-3 border-2'>{introl.stuid}</td>
//                                         <td className=' text-center p-3 border-2'>{introl.rqst_id}</td>
//                                         <td className=' text-center p-3 border-2'>{introl.phone}</td>
//                                         <td className=' text-center p-3 border-2'>{introl.for}</td>
//                                         <td className=' text-center p-3 border-2'>{new Date(introl.created_at).toISOString().slice(0, 10)}</td>
//                                         <td className=' text-center p-3 border'>
//                                             <Stack direction='row' className=' text-center' >
//                                                 {/* <IconButton> */}
//                                                 <IntroductoryModal introl={introl} />
//                                                 {/* </IconButton> */}

//                                                 <IconButton onClick={() => regapproved(introl.rqst_id)}>
//                                                     <ThumbUpIcon color='primary' />
//                                                 </IconButton>

//                                                 <IconButton>
//                                                     <ThumbDownIcon color='error' />
//                                                 </IconButton>
//                                             </Stack>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </TableBody>
//                     </Table>
//                     {/* <TablePagination className=' bottom-0'
//                         rowsPerPageOptions={[10, 15, 25, 100]}
//                         component="div"
//                         count={data.length}
//                         rowsPerPage={rowsPerPage}
//                         page={page}
//                         onPageChange={handleChangePage}
//                         onRowsPerPageChange={handleChangeRowsPerPage} /> */}
//                 </TableContainer>
//             </div>


//             {/* <div className=' col-start-4 col-span-2 m-6 w-56'>
//                     {showAlert && (
//                         <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
//                             {alertMessage}
//                         </Alert>
//                     )}
//                 </div> */}

//         </div>



//     )
// }

// export default IntroRegistrar











import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
// import Lpane from '../../components/Lpane'
import { Breadcrumbs, Link, Card, Alert, Table, TableHead, TableRow, TableBody, TableCell, Stack, IconButton, TablePagination } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import IntroductoryModal from '../../components/IntroductoryModal'
// import IDCardView from '../../components/IDCardView'
import config from '../../Middleware/apiConfig';






function IntroductoryLetter() {

    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');


    const loadData = async () => {
        const response = await axios.get(`${config.backendUrl}/api/Intro/getfinapproved`);
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const regapproved = (rqst_id) => {
        axios
            .post(`${config.backendUrl}/api/Intro/regapprove`, { rqst_id })
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

    const regrejects = (rqst_id) => {
        axios
            .post(`${config.backendUrl}/api/Intro/regrejects`, { rqst_id })
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



    return (
        <>
            <div className=' grid grid-cols-9 h-screen pb-12 min-h-screen'>
                <div>
                    <Navbar />
                </div>

                <div className=' text-black col-span-full row-auto mt-12'>
                    <Breadcrumbs arial-label=' breadcrumb' separator=">">
                        <Link href='/registrar' underline='hover'>HOME</Link>
                        <Link href='#' underline='hover'>INTRODUCTORY LETTERS</Link>
                    </Breadcrumbs>
                </div>


                <div className=' grid col-span-8 col-start-2 w-[95%]'>

                    <Card className=' drop-shadow-2xl'>
                        <h1 className=' font-semibold text-center bg-sky-800 text-white p-6 lg:text-2xl '>Introductory Letter Requests</h1>
                        <Table className=''>
                            <TableHead>
                                <TableRow>
                                    <TableCell className=' border-2'></TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>ID NO.</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>REQUEST ID</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>PHONE</TableCell>
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'>RECEIPT</TableCell>
                                    {/* <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2'> DATE</TableCell> */}
                                    <TableCell style={{ fontWeight: "bolder", textAlign: 'center' }} className=' border-2 items-center'>ACTION</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody className='text-sm'>
                                {data.map((introl, index) => {
                                    return (
                                        <tr key={introl.rqst_id} className=' border p-12'>
                                            <th scope="row">  {index + 1}</th>
                                            <td className=' text-center p-3 border-2'>{introl.stuid}</td>
                                            <td className=' text-center p-3 border-2'>{introl.rqst_id}</td>
                                            <td className=' text-center p-3 border-2'>{introl.phone}</td>
                                            <td className=' text-center p-3 border-2'>{introl.for}</td>
                                            {/* <td className=' text-center p-3 border-2'>{new Date(introl.created_at).toISOString().slice(0, 10)}</td> */}
                                            <td className=' text-center p-3 border-2'>
                                                <Stack direction='row' className=' items-center'>
                                                    <IntroductoryModal introl={introl} />

                                                    <IconButton onClick={() => regapproved(introl.rqst_id)}>
                                                        <ThumbUpIcon variant='contained' color='primary' />
                                                    </IconButton>
                                                    <IconButton variant='contained' color='error'
                                                        onClick={() => regrejects(introl.rqst_id)}
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
                    </Card>

                </div>

                <div className=' col-start-4 col-span-2'>
                    {showAlert && (
                        <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
                            {alertMessage}
                        </Alert>
                    )}
                </div>
            </div>

        </>

    )
}

export default IntroductoryLetter
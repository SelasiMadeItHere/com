import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Lpane from '../../components/Lpane';
import axios from 'axios';
import { Card, Table, TableHead, TableRow, TableBody, TableCell, TablePagination, IconButton, Stack, } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



function AdminCertificate() {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/getCard");
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
        <div className=' bg-slate-300 grid grid-cols-9 md:h-screen lg:h-full   '>
            <div>
                <Navbar />
                <Lpane className='col-span-2' />
            </div>

            <div className='mt-24 grid col-span-8 col-start-3 w-[95%]'>
                <Card className='my-12'>
                    <h1 className=' text-2xl font-semibold text-center bg-sky-800 text-white p-6 '>Card Renewal Requests</h1>
                    <Table className='mt-5'>
                        <TableHead className=' text-center'>
                            <TableRow >
                                <TableCell style={{ fontWeight: "bolder" }} className=' border'></TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' border'>ID NO.</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' border'>CAMPUS</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' border'>SERVICE</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }} className=' border'>TRACKING ID</TableCell>
                                {/* <TableCell style={{ fontWeight: "bolder" }}>SURNAME NAME</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>PROGRAM</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>LEVEL</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>CAMPUS</TableCell>
                                <TableCell style={{ fontWeight: "bolder" }}>STATUS</TableCell> */}
                                <TableCell style={{ fontWeight: "bolder" }} className=' grid grid-cols-2'>ACTION</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map((card, index) => {
                                return (
                                    <tr key={card.ID} className=' border p-12'>
                                        <th scope="row">  {index + 1}</th>
                                        <td className=' text-left p-3 border'>{card.ID}</td>
                                        <td className=' text-left p-3 border'>{card.campus}</td>
                                        <td className=' text-left p-3 border'>{card.service}</td>
                                        <td className=' text-left p-3 border'>{card.rqst_id}</td>
                                        
                                        <td className=' text-center p-3 border-y'>
                                            <Stack direction='row' className=''>
                                                {/* <TranscriptModal card={card} /> */}
                                                <IconButton>
                                                    <SendIcon variant='contained' color='primary' />
                                                </IconButton>
                                                {/* <IconButton variant='contained' color='error' onClick={() => handleDeleteCard(card.ID)}>
                                                    <DeleteIcon />
                                                </IconButton> */}
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
    )
}

export default AdminCertificate
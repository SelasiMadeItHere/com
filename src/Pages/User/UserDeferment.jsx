import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
// import { TextareaAutosize } from '@mui/base';
import axios from 'axios';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';


function UserDeferment() {

    const [stuid, setIdnumber] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [clevel, setClevel] = useState('');
    const [defsem, setDefSem] = useState('');
    const [retsem, setRetSem] = useState('');
    const [defyear, setDefYear] = useState('');
    const [retyear, setRetYear] = useState('');
    const [csem, setCsem] = useState('');
    const [applied, setApplied] = useState('');
    const [reason, setReason] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');


    const customText = stuid + '-DEF-'
    const rqst_id = customText + uuidv4().substring(0, 6);

    const DefSubmit = () => {
        axios.post("http://localhost:5002/api/newdefer", {
            rqst_id: rqst_id,
            stuid: stuid,
            phone: phone,
            clevel: clevel,
            defsem: defsem,
            retsem: retsem,
            defyear: defyear,
            retyear: retyear,
            applied: applied,
            reason: reason,
            csem: csem
        })

            .then((response) => {
                const data = response.data;
                if (data) {
                    setIdnumber('');
                    setPhone('');
                    setMail('');
                    setClevel('');
                    setDefSem('');
                    setCsem('');
                    setDefYear('');
                    setRetYear('');
                    setApplied('');
                    setReason('');
                    setShowAlert('');
                    setAlertSeverity('');
                    setAlertMessage('');
                    window.alert("YOUR REQUEST ID IS " + rqst_id);
                }

            })
            .catch((error) => {
                console.error(error);
                setAlertSeverity('error');
                setAlertMessage('Failed to upload form.');
                setShowAlert(true);
            });


    }


    return (
        <>
            <div className=' bg-slate-200 sm:min-w-full'>
                <div>
                    <Navbar />
                </div>

                <div className=' lg:mx-24 my-12 text-center text-sky-800 text-3xl font-semibold py-12'>
                    FILL OUT THE FORM BELOW TO APPLY FOR DEFERMENT
                </div>

                <div className=' col-span-3 m-6'>
                    {showAlert && (
                        <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
                            {alertMessage}
                        </Alert>
                    )}
                </div>

                <div>
                    <form name='deferment' className='bg-white rounded-xl drop-shadow-md lg:mx-24 p-12'>
                        <p className=' font-bold text-sky-800 p-8'>PERSONAL IDENTIFICATION</p>

                        <div className='grid text-lg'>

                            <div className='grid lg:grid-cols-3 px-12'>
                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label>ID Number:</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input name='fname'
                                            value={stuid}
                                            onChange={(e) => setIdnumber(e.target.value)}
                                            className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label >Phone Number</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input type='number'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <p className=' font-bold text-sky-800 p-8'>Current Academic Progress</p>
                        <div className='grid text-lg'>

                            <div className='grid lg:grid-cols-3 px-12'>
                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label>Current Level:</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <select onChange={(e) => setClevel(e.target.value)} name='clevel'
                                            value={clevel}
                                            className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
                                            <option> --Select--</option>
                                            <option name='l100'> 100 </option>
                                            <option name='l200'> 200 </option>
                                            <option name='l300'> 300 </option>
                                            <option name='l400'> 400 </option>
                                            <option name='masters'> Masters </option>
                                            <option name='phd'> PhD </option>
                                        </select>
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label >Current Semester/Trimester</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <select
                                            name='program'
                                            value={csem}
                                            onChange={(e) => setCsem(e.target.value)}
                                            className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
                                            <option> --SELECT--</option>
                                            <option name='Sem1' value={1}> Semester 1</option>
                                            <option name='Sem2' value={2}> Semester 2 </option>
                                        </select>
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label> Email</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input name='mail'
                                            value={mail}
                                            onChange={(e) => setMail(e.target.value)} className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* Reminder: Request for deferment form form DFA*/}
                        <p className=' font-bold text-sky-800 p-8'>DEFERMENT INFORMATION</p>

                        <div className='grid lg:grid-cols-3 px-12'>

                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >I am deferring semester/trimester</label>
                                </div>
                                <div className='grid-rows-2'>
                                    <select
                                        name='program'
                                        value={defsem}
                                        onChange={(e) => setDefSem(e.target.value)}
                                        className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
                                        <option> --SELECT--</option>
                                        <option name='Sem1' value={1}> Semester 1</option>
                                        <option name='Sem2' value={2}> Semester 2 </option>
                                    </select> 
                                </div>
                            </div>

                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >of Academic Year</label>
                                </div>
                                <div className='grid-rows-2'>
                                    <input type="number" name="academicyear" defaultValue={2024}
                                        className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 ' />
                                </div>
                            </div>

                            <div></div>

                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >I am planning to return in semester/trimester:</label>
                                </div>
                                <div className='grid-rows-2'>
                                    <select
                                        name='program'
                                        value={retsem}
                                        onChange={(e) => setRetSem(e.target.value)}
                                        className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
                                        <option> --SELECT--</option>
                                        <option name='Sem1' value={1}> Semester 1</option>
                                        <option name='Sem2' value={2}> Semester 2 </option>
                                    </select>
                                </div>
                            </div>


                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >of Academic Year</label>
                                </div>
                                <div className='grid-rows-2'>
                                    <input type="number" name="academicyear"
                                        defaultValue={2024}
                                        className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 ' />
                                </div>
                            </div>
                        </div>
                        {/* 
                        <div>

                        </div> */}



                        <div className=' grid-rows-2 pb-12 '>
                            <div className='grid-rows-1'>
                                <p className=' font-bold text-sky-800 p-8'>REASON FOR DEFERMENT</p>



                                <div className=' grid-rows-2 pb-6'>
                                    <div className='grid-rows-1'>


                                        <div className='grid-rows-2 px-12'>
                                            <div>
                                                <label >Reason for Deferment</label>
                                            </div>

                                            <select
                                                name='program'
                                                value={reason}
                                                onChange={(e) => setReason(e.target.value)}
                                                className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[40%] focus:outline-blue-800 py-1  '>
                                                <option> --SELECT--</option>
                                                <option name='financial'> Financial</option>
                                                <option name='travel'> Travel </option>
                                                <option name='academdifficult'> Academic Difficulties </option>
                                                <option name='acade'> Academic Difficulties </option>
                                                <option name='family'> Family </option>
                                                <option name='illness'> Illness </option>
                                                <option name='workcommitment'> Work Commitments </option>
                                                <option name='person'> Personal </option>
                                                <option name='other'> other(s) </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='grid-rows-3 pl-12'>
                                {/* <TextareaAutosize name='reason'
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className=' lg:w-full focus:outline-blue-800 lg:h-9 border-2 border-gray-700 rounded-md' minRows={9} /> */}
                            </div>
                        </div>

                        <div className=' text-center'>
                            <Button onClick={DefSubmit} variant='contained' className=' bg-sky-700 p-3 text-white rounded-md'>SUBMIT</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserDeferment
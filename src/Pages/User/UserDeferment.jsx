import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { TextareaAutosize } from '@mui/base';
import axios from 'axios';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';


function UserDeferment() {

    const [stuid, setIdnumber] = useState('');
    const [fname, setFname] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [clevel, setClevel] = useState('');
    const [program, setProgram] = useState('');
    const [campus, setCampus] = useState('');
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
            fname: fname,
            phone: phone,
            mail: mail,
            clevel: clevel,
            program: program,
            campus: campus,
            applied: applied,
            reason: reason
        })

            .then((response) => {
            const data = response.data;
            if (data) {
                setFname();
                setPhone();
                setMail();
                setClevel();
                setProgram();
                setCampus();
                setApplied();
                setReason();
                setShowAlert();
                setAlertSeverity();
                setAlertMessage();
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
                    <form className='bg-white rounded-xl drop-shadow-md lg:mx-24 p-12'>
                        <p className=' font-bold text-sky-800 p-8'>PERSONAL IDENTIFICATION</p>

                        <div className='grid text-lg'>

                            <div className='grid lg:grid-cols-3 px-12'>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label>ID Number:</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input name='fname'
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                            className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label >Phone Number</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
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
                                        value={program}
                                        onChange={(e) => setProgram(e.target.value)}
                                        className='border-b-2 border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
                                        <option> --SELECT--</option>
                                        <option name='Sem1'> Semester 1 (September - December)</option>
                                        <option name='Sem2'> Semester 2 (January to July) </option>
                                    </select>
                                </div>
                            </div>

                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >of Academic Year</label>
                                </div>
                                <div className='grid-rows-2'>
                                <input type="number" name="academicyear" defaultValue={2024} 
                                className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '/>
                                </div>
                            </div>

                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >Level</label>
                                </div>

                                <div className='grid-rows-2'>
                                    <select onChange={(e) => setClevel(e.target.value)} name='clevel'
                                        value={clevel}
                                        className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
                                        <option> --SELECT--</option>
                                        <option name='l100'> 100 </option>
                                        <option name='l200'> 200 </option>
                                        <option name='l300'> 300 </option>
                                        <option name='l400'> 400 </option>
                                        <option name='masters'> Masters </option>
                                        <option name='phd'> PhD </option>
                                    </select>
                                </div>
                            </div>

                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >Semester</label>
                                </div>

                                <div className='grid-rows-2'>
                                    <select
                                        name='campus' onChange={(e) => setCampus} value={campus}
                                        className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2'>
                                        <option> --SELECT--</option>
                                        <option name='Sem1'> Semester 1(January to July) </option>
                                        <option name='Sem2'> Semester 2 (September - December) </option>
                                    </select>
                                </div>
                            </div>


                            <div className=' grid-rows-2 pb-12'>
                                <div className='grid-rows-1'>
                                    <label >Have You Ever Applied For Deferment?</label>
                                </div>

                                <div className='grid-rows-3'>
                                    <div className=' grid grid-cols-4 text-center'>
                                        <div className=' col-start-1'>
                                            <input value={applied}
                                                checked={applied === 'YES'}
                                                type="radio" name="yes"
                                                onChange={(e) => setApplied(e.target.value)}
                                                id="applied_before" />
                                            <label htmlFor="applied_before" >YES</label>
                                        </div>

                                        <div>
                                            <input type="radio"
                                                value={applied}
                                                checked={applied === 'YES'}
                                                name="yes" id="applied_before"
                                                onChange={(e) => setApplied(e.target.value)} />
                                            <label htmlFor="applied_before">NO</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className=' grid-rows-2 pb-12 '>
                            <div className='grid-rows-1'>
                                <p className=' font-bold text-sky-800 p-8'>REASON FOR DEFERMENT</p>
                            </div>

                            <div className='grid-rows-3 pl-12'>
                                <TextareaAutosize name='reason'
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className=' lg:w-full focus:outline-blue-800 lg:h-9 border-2 border-gray-700 rounded-md' minRows={9} />
                            </div>
                        </div>

                        <div className=' text-center'>
                            <Button onSubmit={DefSubmit} variant='contained' className=' bg-sky-700 p-3 text-white rounded-md'>SUBMIT</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserDeferment
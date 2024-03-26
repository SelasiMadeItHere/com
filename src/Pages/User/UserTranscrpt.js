import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { Button } from '@mui/material';
import config from '../../Middleware/apiConfig';
// import { TextareaAutosize } from '@mui/base';

function UserTranscrpt() {



  const [stuid, setIdnumber] = useState('');
  const [stuname, setStuName] = useState('');
  const [level, setLevel] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setMail] = useState('');
  const [program, setProgram] = useState('');
  const [purpose, setPurpose] = useState('');
  const [ogname, setOgname] = useState('');
  const [ogphone, setOgphone] = useState('');
  const [ogemail, setOgemail] = useState('');
  const [postaddress, setPostAddress] = useState('');
  const [receipt, setReceipt] = useState('');
  const [delivery, setDelivery] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');


  const customText = stuid + '-TRANS-'
  const rqst_id = customText + uuidv4().substring(0, 3);

  const TransSubmit = () => {
    axios.post(`${config.backendUrl}/api/newtrans`, {
      rqst_id: rqst_id,
      stuid: stuid,
      stuname: stuname,
      phone: phone,
      email: email,
      program: program,
      level: level,
      purpose: purpose,
      ogname: ogname,
      ogphone: ogphone,
      ogemail: ogemail,
      postaddress: postaddress,
      receipt: receipt,
      delivery: delivery,
    })

      .then((response) => {
        const data = response.data;
        if (data) {
          setIdnumber('');
          setStuName('');
          setPhone('');
          setMail('');
          setProgram('');
          setPurpose('')
          setLevel('');
          setOgname('');
          setOgphone('');
          setOgemail('');
          setPostAddress('');
          setDelivery('');
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
      <div className=' bg-slate-200 w-full'>
        <div>
          <Navbar />
        </div>

        <div className=' text-center text-sky-800 text-2xl font-semibold py-6 md:pt-36 lg:pt-36'>
          FILL OUT THE FORM TO APPLY FOR TRANSCRIPT
        </div>

        <div className=' col-span-3 m-6'>
          {showAlert && (
            <Alert variant="filled" severity={alertSeverity} onClose={() => setShowAlert(false)}>
              {alertMessage}
            </Alert>
          )}
        </div>

        <div>
          <form className='bg-white rounded-xl shadow-md mx-4 md:mx-8 lg:mx-24 p-4 md:p-12'>
            <p className=' font-bold text-sky-800 p-8'>PERSONAL IDENTIFICATION</p>

            <div className='grid text-lg'>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4'>
                <div className='pb-4'>
                  <label>ID Number:</label>
                  <input name='idnumber'
                    value={stuid}
                    onChange={(e) => setIdnumber(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='ADSXXXXXXXXXY' />
                </div>

                <div className='pb-4'>
                  <label>Name</label>
                  <input name='fname'
                    value={stuname}
                    onChange={(e) => setStuName(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='JOHN DOE' />
                </div>

                <div className='pb-4'>
                  <label>Phone Number</label>
                  <input name='phone'
                    type='number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='+123 456 789 10' />
                </div>

                <div className='pb-4'>
                  <label>Email</label>
                  <input name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setMail(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='+123 456 789 10' />
                </div>

              </div>

            </div>


            {/* Reminder: Request for deferment form form DFA*/}
            <p className=' font-bold text-sky-800 p-8'>ACADEMIC INFORMATION</p>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4'>

              <div className=' grid-rows-2 pb-6'>
                <div className='grid-rows-1'>
                  <label >Program of Study</label>
                </div>

                <div className='grid-rows-2'>
                  <select className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}>
                    <option> --SELECT--</option>
                    <option name='business'> Business</option>
                    <option name='cve'> Civil Engineering</option>
                    <option name='ce'> Computer Engineering</option>
                    <option name='cs'> Computer Science</option>
                    <option name='it'> Information Technology</option>
                    <option name='eee'> Electrical Engineering </option>
                  </select>
                </div>

              </div>


              <div className=' grid-rows-2 pb-6'>
                <div className='grid-rows-1'>
                  <label >Level</label>
                </div>

                <div className='grid-rows-2'>
                  <select className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2 '
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}>
                    <option> --SELECT--</option>
                    <option name='l100'> 100 </option>
                    <option name='l200'> 200 </option>
                    <option name='l300'> 300 </option>
                    <option name='l400'> 400 </option>
                  </select>
                </div>
              </div>

              <div className=' grid-rows-2 pb-6'>
                <div className='grid-rows-1'>
                  <label >Purpose of application</label>
                </div>

                <div className='grid-rows-2'>
                  <select className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}>
                    <option> --SELECT--</option>
                    <option name='kcc'>Job application </option>
                    <option name='seaview'>Application to another school</option>
                    <option name='kcc'>Personal</option>
                  </select>
                </div>
              </div>
            </div>


            <div className=' grid-rows-2 pb-12 '>

              <div className='grid-rows-1 pt-6'>
                <p className=' text-center text-red-700 font-semibold'>*****PROVIDE INFORMATION FOR THIS SECTION OF THE FORM ONLY IF YOU ARE TO PRESENT THIS TO AN ORGANIZATION*****</p>
                <p className=' font-bold text-sky-800 py-8'>ORGANIZATION'S INFORMATION</p>
              </div>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4'>
                <div className='pb-4 grid-cols-1 '>
                  <label>Organization's Name:</label>
                  <input name='ogname'
                    value={ogname}
                    onChange={(e) => setOgname(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='Organization Name' />
                </div>

                <div className='pb-4 grid-cols-2 '>
                  <label>Organization's Telephone</label>
                  <input name='ogcontact'
                    type='tel'
                    value={ogphone}
                    onChange={(e) => setOgphone(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder=' +233 123 456 7890' />
                </div>

                <div className='pb-4 grid-cols-3 '>
                  <label>Organization's Email</label>
                  <input name='ogemail'
                    value={ogemail}
                    onChange={(e) => setOgemail(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='organizaation@email.com' />
                </div>

                <div className='pb-4 grid-cols-3'>
                  <label>Organization's Post Address</label>
                  <input name='ogpostal'
                    value={postaddress}
                    onChange={(e) => setPostAddress(e.target.value)}
                    className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='Post address' />
                </div>
              </div>
            </div>

            <div className=' grid-rows-2 pb-12 '>

              <div className='grid-rows-1'>
                <p className=' font-bold text-sky-800 pb-8'>ADDITIONAL INFORMATION</p>
              </div>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4'>
                <div className='pb-4 grid-cols-1 '>
                  <label>Proof of payment:</label>
                  <input name='receipt_path' type='file'
                    value={receipt}
                    onChange={(e) => setReceipt(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder='Organization Name' />
                </div>

                <div className='pb-4 grid-cols-2 '>
                  <label>Delivery mode</label>
                  <select name='delivery_mode'
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'
                    placeholder=' +233 123 456 7890'>
                    <option name='post' >Post</option>
                    <option name='email'>Email </option>
                    <option>Other</option>
                  </select>
                </div>

                {/* <div className='pb-4 grid-cols-3 '>
                              <label>Organization's Email</label>
                              <input name='ogemail' 
                              className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' 
                              placeholder='organization@email.com'/>
                            </div>                                                          */}
              </div>
            </div>


            <div className=' text-center'>
              <Button onClick={TransSubmit} className=' bg-sky-700 p-3 text-white rounded-md'>SUBMIT</Button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default UserTranscrpt
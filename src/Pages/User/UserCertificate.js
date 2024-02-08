// import React from 'react'
// import Navbar from '../../components/Navbar'


// function UserCertificate() {
//     return (
//         <>
//             <div className=' bg-slate-400 h-full'>
//                 <div>
//                     <Navbar />
//                 </div>

//                 <div className=' text-3xl font-bold text-center text-white pt-24'>
//                     <p> Certificate Application </p>
//                 </div>

//                 <div className=' p-12'>
//                     <form action='#' method='POST'>
//                         <div className='grid gap-6 bg-white rounded-md p-6 lg:grid-cols-3 md:grid-cols-2'>
//                             <p className='text-blue-500 font-bold'>PROVIDE YOUR PERSONAL INFORMATION</p>
//                             <div className=' col-span-2'></div>

//                             <input type='text' placeholder='Enter Your ID Number' className=' p-3 border-2 border-gray-700 rounded-md' required />
//                             <input type='text' placeholder='Enter Your First Name' className=' p-3 border-2 border-gray-700 rounded-md' required />
//                             <input type='text' placeholder='Enter Your Middle Name (optional)' className=' p-3 border-2 border-gray-700 rounded-md' />
//                             <input type='text' placeholder='Enter Your Last Name' className=' p-3 border-2 border-gray-700 rounded-md' required />
//                         </div>

//                         <div className='grid grid-cols-3 gap-6 bg-white rounded-md p-6 my-4'>
//                             <p className='text-blue-500 font-bold col-span-3'>PROVIDE YOUR ADMISSION DETAILS</p>
//                             {/* <div className=' col-span-2'></div> */}

//                             <input type='text' placeholder='Enter Your ID Number' className=' p-3 border-2 border-gray-700 rounded-md' />

//                             <select className='border-b-2 border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
//                                 <option> --SELECT--</option>
//                                 <option name='business'>BUSINESS</option>
//                                 <option name='cve'> CIVIL ENGINEERING</option>
//                                 <option name='ce'> COMPUTER ENGINEERING</option>
//                                 <option name='cs'> COMPUTER SCIENCE</option>
//                                 <option name='it'> INFORMATION TECHNOLOGY</option>
//                                 <option name='eee'> ELECTRICAL ENGINEERING </option>
//                             </select>

//                             <select className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
//                                 <option> --SELECT--</option>
//                                 <option name='l100'> 100 </option>
//                                 <option name='l200'> 200 </option>
//                                 <option name='l300'> 300 </option>
//                                 <option name='l400'> 400 </option>
//                             </select>
//                         </div>

//                         <div className=' bg-white grid grid-cols-3 gap-6 rounded-md p-6 mt==-4'>
//                             <p></p>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//         </>

//     )
// }

// export default UserCertificate


import React, { useState }from 'react'
import Navbar from '../../components/Navbar'
import { TextField } from '@mui/material'
import Alert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';



function UserCertificate() {

  const [stuid, setStuid] = useState('');
  const [fname, setFname] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('');
  const [level, setLevel] = useState('');
  const [purpose, setPurpose] = useState('');
  const [ogname, setOgname] = useState('');
  const [ogcontact, setContact] = useState('');
  const [ogemail, setOgemail] = useState('');
  const [ogpostal, setPostal] = useState('');
  const [proof, setProof] = useState('');
  const [post, setPost] = useState('')

  const customText = stuid + '-CERT-'
  const rqst_id = customText + uuidv4().substring(0, 6);

  const submit = (e)=>{
    axios.post("http://localhost:5002/api/newdefer", {
      rqst_id: rqst_id,
      stuid: stuid,
      phone: phone,
      level: level,
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
    
      <div className=' bg-slate-200 w-full'>
                <div>
                    <Navbar />
                </div>

                <div className=' text-center text-sky-800 text-2xl font-semibold py-6 md:pt-36 lg:pt-36'>
                    FILL OUT THE FORM TO APPLY FOR CERTIFICATE 
                </div>

                <div>
                    <form onSubmit={submit} className='bg-white rounded-xl shadow-md mx-4 md:mx-8 lg:mx-24 p-4 md:p-12'>
                        <p className=' font-bold text-sky-800 p-8'>PERSONAL IDENTIFICATION</p>

                        <div className='grid text-lg'>

                          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4'>
                              <div className='pb-4'>
                                  <label>ID Number:</label>
                                  <TextField name='idnumber' value={idnumber} 
                                  onChange={(e) => setStuid(e.target.value)}
                                  className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' 
                                  placeholder='ADSXXXXXXXXXY'/>
                              </div>

                              <div className='pb-4'>
                                  <label>Name</label>
                                  <TextField name='fname'
                                  onChange={(e)=>setFname(e.target.value)} 
                                  value={fname} 
                                  className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='JOHN DOE'/>
                              </div>

                              <div className='pb-4'>
                                <label>Phone Number</label>
                                <TextField name='phone' value={phone} 
                                onChange={(e)=>setPhone(e.target.value)}
                                className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' 
                                placeholder='+123 456 789 10'/>
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
                                <select value={program} onChange={(e)=>setProgram(e.target.value)} className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
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
                                    <select value={level} onChange={(e)=>setLevel(e.target.value)} className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2 '>
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
                                    <select value={purpose} 
                                    onChange={(e)=>setPurpose(e.target.value)}
                                    className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
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
                                <TextField name='ogname'
                                onChange={(e)=>setOgname(e.target.value)} 
                                value={ogname} className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' 
                                placeholder='Organization Name' />
                              </div>

                              <div className='pb-4 grid-cols-2 '>
                                  <label>Organization's Telephone</label>
                                  <TextField name='ogcontact' 
                                  onChange={(e)=>setContact(e.target.value)}
                                  value={ogcontact} className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder=' +233 123 456 7890'/>
                              </div>

                              <div className='pb-4 grid-cols-3 '>
                                <label>Organization's Email</label>
                                <TextField name='ogemail' 
                                onChange={(e)=>setOgemail(e.target.value)}
                                value={ogemail} 
                                className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='organizaation@email.com'/>
                              </div>

                              <div className='pb-4 grid-cols-3'>
                                <label>Organization's Post Address</label>
                                <TextField name='ogpostal' value={ogpostal} 
                                onChange={(e) => setPostal(e.target.value)}
                                className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' 
                                placeholder='Post address'/>
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
                              <TextField name='receipt_path' type='file' 
                              onChange={(e)=>setProof(e.target.value)}
                              value={proof}
                              className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' 
                              placeholder='Organization Name' />
                            </div>

                            <div className='pb-4 grid-cols-2 '>
                                <label>Delivery mode</label>
                                <select name='delivery_mode'
                                //  onSelect={address} 
                                 className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder=' +233 123 456 7890'>
                                  <option>--SELECT--</option>
                                  <option name='post' id='post'>Post</option>

                                  <option name='email' id='eaddress'>Email </option>
                                  <option>Other</option>
                                </select>
                            </div>

                            <div className='pb-4 grid-cols-3 hidden'>
                              <label>Postal Address</label>
                              <TextField name='post' 
                              value={post}
                              onChange={(e) => setPost(e.target.value)}
                              className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='Postal address'/>
                            </div> 

                            <div className='pb-4 grid-cols-3 hidden'>
                              <label>Provide E-mail address</label>
                              <TextField name='ogemail' 
                              value={ogemail}
                              onChange={(e)=> setOgemail}
                              className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='E-mail address to be delivered to'/>
                            </div> 

                            {/* <div className='pb-4 grid-cols-3 '>
                              <label></label>
                              <input name='ogemail' className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='organization@email.com'/>
                            </div>                                                          */}
                          </div>
                      </div>


                        <div className=' text-center'>
                            <button className=' bg-sky-700 p-3 text-white rounded-md'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>

    
  )
}

export default UserCertificate;
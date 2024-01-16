import React from 'react'
import Navbar from '../../components/Navbar'
// import { TextareaAutosize } from '@mui/base';

function UserTranscrpt() {
  return (
    <>
      <div className=' bg-slate-200 w-full'>
                <div>
                    <Navbar />
                </div>

                <div className=' text-center text-sky-800 text-2xl font-semibold py-6 md:pt-36 lg:pt-36'>
                    FILL OUT THE FORM TO APPLY FOR TRANSCRIPT 
                </div>

                <div>
                    <form className='bg-white rounded-xl shadow-md mx-4 md:mx-8 lg:mx-24 p-4 md:p-12'>
                        <p className=' font-bold text-sky-800 p-8'>PERSONAL IDENTIFICATION</p>

                        <div className='grid text-lg'>

                          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4'>
                              <div className='pb-4'>
                                  <label>ID Number:</label>
                                  <input name='idnumber' className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='ADSXXXXXXXXXY'/>
                              </div>

                              <div className='pb-4'>
                                  <label>Name</label>
                                  <input name='fname' className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='JOHN DOE'/>
                              </div>

                              <div className='pb-4'>
                                <label>Phone Number</label>
                                <input name='phone' className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='+123 456 789 10'/>
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
                                <select className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
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
                                    <select className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2 '>
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
                                    <select className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
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
                                <input name='ogname' className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='Organization Name' />
                              </div>

                              <div className='pb-4 grid-cols-2 '>
                                  <label>Organization's Telephone</label>
                                  <input name='ogcontact' className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder=' +233 123 456 7890'/>
                              </div>

                              <div className='pb-4 grid-cols-3 '>
                                <label>Organization's Email</label>
                                <input name='ogemail' className='w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='organizaation@email.com'/>
                              </div>

                              <div className='pb-4 grid-cols-3'>
                                <label>Organization's Post Address</label>
                                <input name='ogpostal' className=' w-full border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' placeholder='Post address'/>
                              </div>                                                        
                            </div>
                        </div>
                      {/* </div> */}


                        <div className=' text-center'>
                            <button className=' bg-sky-700 p-3 text-white rounded-md'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
    </>
    
  )
}

export default UserTranscrpt
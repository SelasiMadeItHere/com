import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import { TextareaAutosize } from '@mui/base';
// import Input from '@mui/material/Input'
// import { Select } from '@mui/material'

function UserDeferment() {

    const [stuid, setIdnumber] = useState('');
    const [fname, setFname] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [clevel, setClevel] = useState('');
    const [program, setProgram] = useState('');
    const [campus, setCampus] = useState('');
    const [applied, setApplied] = useState('');
    const [ogemail, setOgemail] = useState('');
    const [ogpostal, setPostal] = useState('');
    const [proof, setProof] = useState('');
    const [post, setPost] = useState('')


    return (
        <>
            <div className=' bg-slate-200 sm:min-w-full'>
                <div>
                    <Navbar />
                </div>

                <div className=' lg:mx-24 my-12 text-center text-sky-800 text-3xl font-semibold py-12'>
                    FILL OUT THE FORM BELOW TO APPLY FOR DEFERMENT
                </div>

                <div>
                    <form className='bg-white rounded-xl drop-shadow-md lg:mx-24 p-12'>
                        <p className=' font-bold text-sky-800 p-8'>PERSONAL IDENTIFICATION</p>

                        <div className='grid text-lg'>

                            <div className='grid lg:grid-cols-3 px-12'>
                                <div className=' pb-6 grid grid-rows-2'>
                                    <label>ID Number:</label>
                                    <input name='stuid'
                                    onChange={(e)=>setIdnumber(e.target.value)}
                                    className='pl-6 border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2 w-[70%]' />
                                </div>

                                <div className=' col-span-2' />

                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label >First name</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input name='fname' 
                                        onChange={(e)=>setFname(e.target.value)}
                                        className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label >Phone Number</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input name='phone' 
                                        onChange={(e)=>setPhone(e.target.value)}
                                        className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label> Email</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <input name='mail'
                                        onChange={(e)=>setMail(e.target.value)} className=' border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2' />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Reminder: Request for deferment form form DFA*/}
                        <p className=' font-bold text-sky-800 p-8'>ACADEMIC INFORMATION</p>

                        <div className='grid lg:grid-cols-3 px-12'>

                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >Program of Study</label>
                                </div>
                                <div className='grid-rows-2'>
                                    <select 
                                    name='program'
                                    onChange={(e)=>setProgram(e.target.value)}
                                    className='border-b-2 border-2 border-gray-700 rounded-md focus:outline-blue-800 py-1 px-2'>
                                        <option> --SELECT--</option>
                                        <option name='business'> BUSINESS</option>
                                        <option name='cve'> CIVIL ENGINEERING</option>
                                        <option name='ce'> COMPUTER ENGINEERING</option>
                                        <option name='cs'> COMPUTER SCIENCE</option>
                                        <option name='it'> INFORMATION TECHNOLOGY</option>
                                        <option name='eee'> ELECTRICAL ENGINEERING </option>
                                    </select>
                                </div>
                            </div>


                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >Level</label>
                                </div>

                                <div className='grid-rows-2'>
                                    <select onChange={(e)=>setClevel(e.target.value)} name='clevel'
                                    className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2 '>
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
                                    <label >Campus</label>
                                </div>

                                <div className='grid-rows-2'>
                                    <select 
                                    name='campus' onChange={(e)=>setCampus}
                                    className=' border-b-2 pr-12 border-2 border-gray-700 rounded-md min-w-[60%] focus:outline-blue-800 py-1 px-2'>
                                        <option> --SELECT--</option>
                                        <option name='kcc'> KCC </option>
                                        <option name='seaview'> SEAVIEW </option>
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
                                            <input type="radio" name="yes" onChange={(e)=>setApplied} id="applied_before" value={'YdeES'} />
                                            <label htmlFor="applied_before" >YESsd</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="yes" id="applied_before" value={'NO'} />
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
                                <TextareaAutosize name='reason' className=' lg:w-full focus:outline-blue-800 lg:h-9 border-2 border-gray-700 rounded-md'  minRows={9}  />
                            </div>
                        </div>

                        <div className=' text-center'>
                            <button className=' bg-sky-700 p-3 text-white rounded-md'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserDeferment
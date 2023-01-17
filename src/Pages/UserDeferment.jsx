import React from 'react'
import Navbar from '../components/Navbar'
import Input from '@mui/material/Input'

function UserDeferment() {
    return (
        <>
            <div className=' bg-slate-400'>
                <div className='top-0 z-100 fixed'>
                    <Navbar />
                </div>

                <div className=' m-12 text-center text-white text-3xl font-semibold lg:pt-24'>
                    FILL OUT THE FORM BELOW TO APPLY FOR DEFERMENT
                </div>

                <div className=' z-0'>
                    <form className='bg-white rounded-xl drop-shadow-md p-12 mx-24'>
                        <p className=' font-bold text-sky-800 p-8'>PERSONAL IDENTIFICATION</p>

                        <div className='grid font-bold text-blue-600 text-lg'>

                            <div className='grid lg:grid-cols-3 mb-12 '>
                                <div className=' pb-6'>
                                    <label>ID Number:</label>
                                    <Input name='id' />
                                </div>

                                <div className=' col-span-2' />

                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label >First name</label>
                                    </div>
                                    <div className='grid-rows-2 min-w-full'>
                                        <Input name='fname' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label >Last name</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <Input name='lname' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2'>
                                    <div className='grid-rows-1'>
                                        <label> Other Name(optional)</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <Input name='blahblah bblah' type='number' />
                                    </div>
                                </div>
                            </div>



                            {/* Reminder: Request for deferment form form DFA*/}
                            <p className=' font-bold text-sky-800 p-12'>ACADEMIC INFORMATION</p>

                            <div className='grid lg:grid-cols-3'>

                                <div className=' grid-rows-2 pb-6'>
                                    <div className='grid-rows-1'>
                                        <label >Program of Study</label>
                                    </div>
                                    <div className='grid-rows-2'>
                                        <Input name='' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2 pb-6'>
                                    <div className='grid-rows-1'>
                                        <label >Level</label>
                                    </div>

                                    <div className='grid-rows-2'>
                                        <Input name='' />
                                    </div>
                                </div>

                                <div className=' grid-rows-2 pb-6'>
                                    <div className='grid-rows-1'>
                                        <label >Campus</label>
                                    </div>

                                    <div className='grid-rows-2'>
                                        <input type="text" name='trial' className=' rounded border border-l-sky-700 bg-slate-300 text-black font-normal' />
                                    </div>
                                </div>

                                <div className=' grid-rows-2 pb-6'>
                                    <div className='grid-rows-1'>
                                        <label >First name</label>
                                    </div>

                                    <div className='grid-rows-2'>
                                        <Input name='' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2 pb-6'>
                                    <div className='grid-rows-1'>
                                        <label >First name</label>
                                    </div>

                                    <div className='grid-rows-2'>
                                        <Input name='' />
                                    </div>
                                </div>


                                <div className=' grid-rows-2 pb-12'>
                                    <div className='grid-rows-1'>
                                        <label >Have You Ever Applied For Deferment?</label>
                                    </div>

                                    <div className='grid-rows-2'>
                                        <div className=' px-6'>
                                            <input type="radio" name="yes" id="applied_before" value={'YES'} />
                                            <label htmlFor="applied_before">YES</label>
                                        
                                            <input type="radio" name="yes" id="applied_before" value={'NO'} />
                                            <label htmlFor="applied_before">NO</label>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className=' grid-rows-2 pb-6'>
                                <div className='grid-rows-1'>
                                    <label >First name</label>
                                </div>

                                <div className='grid-rows-2'>
                                    <textarea placeholder='Enter your reason for applying for deferment'>

                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        
        </>

    )
}

export default UserDeferment
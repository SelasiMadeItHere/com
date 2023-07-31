import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import logo from '../assets/imgs/AIT_CREST.png'




function Navbar() {
  return (
    <>
      <div className='w-full h-[80px] bg-white drop-shadow-xl z-50 fixed top-0'>
        <div className='px-2 flex justify-between fdefs-center w-full h-full'>
          <div className=' items-start'>
            <h1 className=' inline-flex items-center'>
              <img src={logo} alt='crest' className=' h-16 w-16' />
            </h1>
          </div>

          <p className=' pt-4 text-center lg:text-3xl font-bold '>AIT E-commerce</p>

          <div className='my-6' >
            <Bars3Icon className='w-7 font-extrabold flex mx-5 lg:hidden' />
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar
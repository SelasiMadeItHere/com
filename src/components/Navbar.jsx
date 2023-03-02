import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';




function Navbar() {
  return (
    <>
      <div className='w-full h-[80px] bg-white drop-shadow-xl rounded-lg z-50 fixed top-0'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold mr-4 sm:text-4xl'>AIT E-commerce</h1>
          </div>

          <div>
            <Bars3Icon className='w-7 font-extrabold flex items-end mx-5' />
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar
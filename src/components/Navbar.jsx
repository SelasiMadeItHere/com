import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';


function Navbar() {
  return (
    <>
      <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-sm top-0'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>AIT-Ecommerce</h1>
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
import React from 'react'
import Navbar from '../components/Navbar'
import Dashcards from '../components/Dashcards'

function Userindex() {
  return (
    <div >
        <div className=' fixed top-0'>
            <Navbar/>
        </div>

        <div className='  '>
            <img classname='w-screen h-[50%]' src='../assets/imgs/login_clouds.jpg' alt='heroimg'/>
        </div>


        <div className='  mt-24 grid grid-cols-3 flex-wrap gap-12'>
            <Dashcards classname='w-[30%]' image={require('../assets/imgs/avatar2.png')} name="ID Renewal System" button="Details >>" />
            <Dashcards classname='w-[30%]' image={require('../assets/imgs/avatar2.png')} name="ID Renewal System" button="Details >>" />
            <Dashcards classname='w-[30%]' image={require('../assets/imgs/avatar2.png')} name="ID Renewal System" button="Details >>" />
            <Dashcards classname='w-[30%]' image={require('../assets/imgs/avatar2.png')} name="ID Renewal System" button="Details >>" />
            <Dashcards classname='w-[30%]' image={require('../assets/imgs/avatar2.png')} name="ID Renewal System" button="Details >>" />
        </div>
    </div>
  )
}

export default Userindex
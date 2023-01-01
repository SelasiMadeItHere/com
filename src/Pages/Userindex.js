import Input from '@mui/material/Input'
import React from 'react'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
// import Dashcards from '../components/Dashcards'

function Userindex() {
  return (
    <div>
      <div className=' fixed top-0'>
        <Navbar />
      </div>


      <div className='grid lg:grid-cols-2 h-screen '>
        {/* New Request card */}
        <div className=' grid-cols-1 bg-slate-200 pt-[20%] text-center'>
          <div className=' bg-white outline-blue-500 w-[50%] m-auto p-auto rounded pt-12 p-24 border-solid'>
            <img src={require("../assets/imgs/AIT_CREST.png")} alt="Logo" className=' w-24 h-24 m-auto' />
            <br></br>
            <h1 className=" font-bold">MAKE A NEW REQUEST</h1>
            <br />
            <Input placeholder='Enter Your ID Number' />
            <br /><br />
            <Input placeholder='Enter Your Full Name' />
            <br /><br />
            <Link to='/newrequest'>
              <Button>SUBMIT</Button>
            </Link>
          </div>
        </div>


        <div className='grid-cols-2 bg-blue-700 pt-[20%]'>
          <div className=' bg-white outline-blue-500 w-[50%] m-auto p-auto rounded pt-12 p-24 border-solid'>
            <img src={require("../assets/imgs/AIT_CREST.png")} alt="Logo" className=' w-24 h-24 m-auto' />
            <br></br>
            <h1 className=" font-bold">TRACK REQUEST STATUS</h1>
            <br />
            <Input placeholder='Enter Your ID Number' />
            <br /><br />
            <Input placeholder='Enter Request Tracking ID' />
            <br /><br />
            <Button >SUBMIT</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userindex
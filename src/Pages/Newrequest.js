import React from 'react'
import Navbar from '../components/Navbar'
import Dashcards from '../components/Dashcards'
import { Link } from 'react-router-dom'
// import { Modal, Input} from '@mui/material'
// import IDchoice from './IDchoice'
import ModalCard from '../components/ModalCard'

function Newrequest() {
  return (
    <>

      <div className='fixed'>
        <Navbar />
      </div>
      <div className=' text-center text-5xl pt-28 bg-slate-200 '>
        What can we help you with?
      </div>

      <div className=' bg-slate-200 h-auto py-12 grid lg:grid-cols-6'>

        <div className='grid lg:grid-cols-4 lg:col-span-6 gap-3 mt-12'>
          
          <Dashcards image={require("../assets/imgs/idcards.jpg")} name="ID Card Application" button={<ModalCard/>} />

          <Link to="/defermentapplication">
            <Dashcards image={require("../assets/imgs/exams.jpg")} name="Deferment Application" button={"Apply"} />
          </Link>
          <Link to="/usercertificate">
            <Dashcards image={require("../assets/imgs/apply-device.jpg")} name="Certificate Application" button={"Apply"} />
          </Link>
          <Link to="/admintranscript">
            <Dashcards image={require("../assets/imgs/3d-employee.png")} name="Transcript Application" button={"Apply"} />
          </Link>
        </div>
      </div>

{/* Would have to create a loop here to determine number of question.Same goes for announcement */}
      <div className=' text-center text-3xl font-bold bg-slate-200 p-4'>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <ol className=' justify-around'>
          <li className='bg-white rounded-xl text-lg m-12'>Announcement 1</li>
          <li className='bg-white rounded-xl text-lg m-12'>Announcement 2</li>
          <li className='bg-white rounded-xl text-lg m-12'>Announcement 3</li>
          <li className='bg-white rounded-xl text-lg m-12'>Announcement 4</li>
          <li className='bg-white rounded-xl text-lg m-12'>Announcement 5</li>
          <li className='bg-white rounded-xl text-lg m-12'>Announcement 6</li>
        </ol>
      </div>
    </>
  )
}

export default Newrequest
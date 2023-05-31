import Input from '@mui/material/Input'
import React from 'react'
// import Navbar from '../../components/Navbar'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Dashcards from '../components/Dashcards'
// import axios from 'axios'

function Userindex() {

  // const navigate = useNavigate();

  // const [NRid, setNRid] = useState("");
  // const [fullname, setfullname] = useState("");
  // const submitNR = () => {
  //   Userindex.post('http://localhost:5000/insert', { NRid: NRid, fullname: fullname }).then(() => {
  //     alert("SUCCESSFUL INSERT");
  //   });
  // };


  // const [id, setid] = useState("");
  // const [trackingNumber, settrackingNumber] = useState("");


  // const Submit = () => {
  //   const Payload = {
  //     id,
  //     trackingNumber

  //   }
    
  //   axios.post(`localhost:5000/login`, Payload).then((result) => {
  //     const data = result.data;
  //     if (data) {
  //       navigate("/newrequest");
  //     }
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }


  return (
    <div>
      {/* <div className=' fixed top-0'>
        <Navbar />
      </div> */}


      <div className='grid lg:grid-cols-2 h-screen '>
        {/* New Request card */}
        <div className=' grid-cols-1 bg-slate-200 pt-[20%] text-center'>
          
          <div className=' bg-white outline-blue-500 w-[50%] m-auto rounded-2xl pt-12 p-24 border-solid'>
            <img src={require("../../assets/imgs/AIT_CREST.png")} alt="Logo" className=' w-24 h-24 m-auto p-auto' />
            <br></br>

            <h1 className=" font-bold text-lg">NEW REQUEST</h1>
         

            <div className=' text-red-500 text-center text-xs pb-6'>
              PLEASE MAKE SURE TO KEEP OR TAKE NOTE OF THE TRACKING ID GENERATED FOR YOUR REQUEST AFTER A SUCCESSFUL
               SUBMISSION. IT WOULD BE REQUIRED IN THE EVENT OF TRACKING YOUR REQUEST(S)'S STATUS
            </div>

            <Link to='/newrequest'>
              <Button variant='contained' >APPLY</Button>
            </Link>
          </div>



        </div>


        <div className='grid-cols-2 bg-blue-700 pt-[20%] text-center'>
          <div className=' bg-white outline-blue-500 w-[50%] m-auto p-auto rounded-2xl pt-12 p-24 border-solid'>
            <img src={require("../../assets/imgs/AIT_CREST.png")} alt="Logo" className=' w-24 h-24 m-auto' />
            <br></br>
            <h1 className=" font-bold">TRACK REQUEST STATUS</h1>
            <br />
            <Input placeholder='Enter Your ID Number' />
            <br /><br />
            <Input placeholder='Enter Request Tracking ID' />
            <br /><br />
            <Button className=' justify-center' variant='contained'>SUBMIT</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userindex
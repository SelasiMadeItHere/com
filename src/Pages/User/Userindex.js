// import Input from '@mui/material/Input'
// import React from 'react'
// import { Button, Stepper, Step, StepLabel } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import Tracker from './Tracker';

// function Userindex() {

//   const [id, setId] = useState('');
//   const [rqst_id, setTrackingId] = useState('');
//   const [status, setStatus] = useState('');
//   const [error, setError] = useState('');

//   const handleStatusCheck = () => {
//     axios
//       .post('http://localhost:5002/api/entries', { id, rqst_id })
//       .then((response) => {
//         if (response.data.success) {
//           setStatus(response.data.status);
//           setError('');
//         } else {
//           setError(response.data.message);
//           setStatus('');
//         }
//       }
//       )
//       .catch((error) => {
//         console.log(error);
//         setError('An error occurred. Please try again later.');
//         setStatus('');
//       }
//       );
//     };


//   return (
//     <div>


//       <div className='grid lg:grid-cols-2 h-screen '>
//         {/* New Request card */}
//         <div className=' grid-cols-1 bg-slate-200 pt-[20%] text-center'>

//           <div className=' bg-white outline-blue-500 w-[50%] m-auto rounded-2xl pt-12 p-24 border-solid'>
//             <img src={require("../../assets/imgs/AIT_CREST.png")} alt="Logo" className=' w-24 h-24 m-auto p-auto' />
//             <br></br>

//             <h1 className=" font-bold text-lg">NEW REQUEST</h1>


//             <div className=' text-red-500 text-center text-xs pb-6'>
//               PLEASE MAKE SURE TO KEEP OR TAKE NOTE OF THE TRACKING ID GENERATED FOR YOUR REQUEST AFTER A SUCCESSFUL
//               SUBMISSION. IT WOULD BE REQUIRED IN THE EVENT OF TRACKING YOUR REQUEST(S)'S STATUS
//             </div>

//             <Link to='/newrequest'>
//               <Button variant='contained' >APPLY</Button>
//             </Link>
//           </div>



//         </div>


//         <div className='grid-cols-2 bg-blue-700 pt-[20%] text-center'>
//           <div className=' bg-white outline-blue-500 w-[50%] m-auto p-auto rounded-2xl pt-12 p-24 border-solid'>
//             <img src={require("../../assets/imgs/AIT_CREST.png")} alt="Logo" className=' w-24 h-24 m-auto' />
//             <br></br>
//             <h1 className='font-bold'>TRACK REQUEST STATUS</h1>
//             <br />
//             <form onSubmit={<Tracker/>}>
//               <Input
//                 placeholder='Enter Your ID Number'
//                 type='text'
//                 name='id'
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//               />
//               <br />
//               <br />

//               <Input
//                 placeholder='Enter Request Tracking ID'
//                 type='text'
//                 name='trackId'
//                 value={rqst_id}
//                 onChange={(e) => setTrackingId(e.target.value)}
//               />
//               <br />
//               <br />

//               <Button type='submit' className='justify-center' variant='contained'>
//                 SUBMIT
//               </Button>
//             </form>

//             {error && <p>{error}</p>}
//             {status && (
//               <>
//                 <Stepper activeStep={status === 'Approved' ? 2 : status === 'Verified' ? 1 : 0} alternativeLabel>
//                   <Step>
//                     <StepLabel>Pending</StepLabel>
//                   </Step>
//                   <Step>
//                     <StepLabel>Verified</StepLabel>
//                   </Step>
//                   <Step>
//                     <StepLabel>Approved</StepLabel>
//                   </Step>
//                 </Stepper>
//                 <p>Status: {status}</p>
//               </>
//             )}

//             {/* <App /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Userindex






import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Modal, Box, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Userindex() {
  const [id, setId] = useState('');
  const [rqst_id, setTrackingId] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleStatusCheck = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5002/api/entries', { id, rqst_id })

      .then((response) => {


        if (response.data.success) {
          setStatus(response.data.status);
          setError('');
        } else {
          setError(response.data.message);
          setStatus('');
        }
      })
      .catch((error) => {
        console.log(error);
        setError('An error occurred. Please try again later.');
        setStatus('');
      });


  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='grid lg:grid-cols-2 h-screen sm:flex-1'>
        {/* New Request card */}
        {/* <div className='grid-cols-1 bg-slate-200 pt-[20%] text-center' > */}

        <div className='flex items-center justify-center bg-slate-200 text-center' >
          <div className='bg-white outline-blue-500 md:w-[50%] m-auto rounded-2xl pt-12 p-24 border-solid'>
            <img src={require('../../assets/imgs/AIT_CREST.png')} alt='Logo' className='w-24 h-24 m-auto p-auto' />
            <br />
            <h1 className='font-bold text-lg'>NEW REQUEST</h1>
            <div className='text-red-500 text-center text-xs pb-6'>
              PLEASE MAKE SURE TO KEEP OR TAKE NOTE OF THE TRACKING ID GENERATED FOR YOUR REQUEST AFTER A SUCCESSFUL
              SUBMISSION. IT WOULD BE REQUIRED IN THE EVENT OF TRACKING YOUR REQUEST(S)'S STATUS
            </div>
            <Link to='/newrequest'>
              <Button variant='contained'>APPLY</Button>
            </Link>
          </div>
        </div>

        {/* <div className='grid-cols-2 bg-blue-700 pt-[20%] text-center'> */}
        <div className='flex items-center justify-center bg-blue-700 text-center' >

          <div className='bg-white outline-blue-500 md:w-[50%] m-auto rounded-2xl pt-12 p-24 border-solid'>
            <img src={require('../../assets/imgs/AIT_CREST.png')} alt='Logo' className='w-24 h-24 m-auto p-auto' />
            <br />
            <h1 className='font-bold'>TRACK REQUEST STATUS</h1>
            <br />
            
            <form onSubmit={handleStatusCheck}>
              <Input
                placeholder='Enter Your ID Number'
                type='text'
                name='id'
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <br />
              <br />

              <Input
                placeholder='Enter Request Tracking ID'
                type='text'
                name='trackId'
                value={rqst_id}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <br />
              <br />
              <Button type='submit' className='justify-center' variant='contained' onClick={handleOpenModal}>
                SUBMIT
              </Button>
            </form>

            <Modal open={open} onClose={handleCloseModal}>

              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1000, height: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <h2 id='modal-title' className=' text-center text-2xl font-bold'>Request Status</h2>
                <hr />


                {error && <p>{error}</p>}
                {status && (
                  <>
                    <Stepper activeStep={(status === 'Ready'|| status === 'worked_on') ? 5 :(status === 'Approved' ) ? 3 : status === 'verified' ? 2 : status=== 'rejected'? -1: 1} alternativeLabel className=' my-20'>
                      <Step>
                        <StepLabel>Pending</StepLabel>
                        <p>Your request is yet to be attended to by an officer</p>
                      </Step>
                      <Step>
                        <StepLabel>Verified</StepLabel>
                        <p>Your payment for this service or request has been approved by the DFA</p>
                      </Step>
                      <Step>
                        <StepLabel>Approved</StepLabel>
                        <p>The Registrar has approved of your request and has been assigned to an officer</p>
                      </Step>
                      <Step>
                        <StepLabel>Being Worked</StepLabel>
                        <p>An officer is currently working on your request</p>
                      </Step>
                      <Step>
                        <StepLabel>Ready</StepLabel>

                      </Step>
                    </Stepper>

                  </>
                )}

                <Button onClick={handleCloseModal} sx={{left: '50%'}} variant='contained'>Close</Button>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userindex;

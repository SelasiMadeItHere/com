import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Modal } from '@mui/material';
import { Avatar, Button } from '@mui/material';
import avatar from '../assets/imgs/avatar2.png'


function TranscriptModal({ trans }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton variant='outlined' onClick={handleOpen}>
        <VisibilityIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='mx-[30%]'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <Box 
        className=' rounded-lg shadow-md px-4 origin-center w-full top-20 bg-white m-3 overflow-y-auto' 
        sx={{ maxHeight: '80vh' }}
        >
          <Typography id="modal-modal-title" variant="h5" 
          sx={{ fontWeight: 600 }} 
          className=' text-center text-blue-700 border-b-2 py-4'>
            View Request Details
          </Typography>
          <Typography id="modal-modal-description">
            <div className=' p-6'>
              <div className=' grid grid-cols-3'>
                <Avatar className=' col-start-2' src={avatar} sx={{ height: 120, width: 120 }} />
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Request ID: </label>{trans.reqid}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'>Student ID: </label>{trans.stuid}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Name: </label>{trans.name}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Program of Study: </label>{trans.prog}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Level: </label>{trans.level}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Phone: </label>{trans.purpose}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Organization's Name: </label>{trans.ogname}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Organization's Contact Person: </label>{trans.ogcontact}
              </div>
              
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Purpose: </label>{trans.purpose}
              </div>
              
               <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Organization's Mail: </label>{trans.ogemail}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Organization's Postal Address: </label>{trans.ogpostal}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Organization's Phone Number: </label>{trans.phone}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Delivery Mode: </label>{trans.deliv_mode}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Specify Mode: </label>{trans.mode_specify}
              </div>

              
              {/* */}

            </div>

            <div className=' text-center pb-4'>
              <Button variant='contained' color='primary' onClick={handleClose}>CLOSE</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default TranscriptModal
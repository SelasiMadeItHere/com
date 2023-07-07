import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Modal } from '@mui/material';
import { Avatar, Button } from '@mui/material';
import avatar from '../assets/imgs/avatar2.png'


function IDCardView({ card }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton variant='outlined' color='primary' onClick={handleOpen}>
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
          alignfdefs: 'center',
          justifyContent: 'center',
        }}
      >

        <Box
          className=' rounded-lg shadow-md px-4 origin-center w-full bg-white m-3 overflow-y-auto'
          sx={{ maxHeight: '70vh' }}
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
                <label className='  text-blue-700 font-bold'> Request ID: </label>{card.rqst_id}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'>Student ID: </label>{card.ID}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Service: </label>{card.service}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Campus: </label>{card.campus}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Proof of Receipt: </label>
              
                  <div key={card.rqst_id}>
                    <img src={card.imagePath} alt="Preview" />
                  </div>
              </div>
              

              <div className='  pt-3'>
                <label className='  text-blue-700 font-bold'> Date of Request: </label>{card.DateApplied}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Date of Verification: </label>{card.DateApproved}
              </div>
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

export default IDCardView;
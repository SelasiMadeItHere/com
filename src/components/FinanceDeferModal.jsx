import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Modal } from '@mui/material';
import { Avatar, Button } from '@mui/material';
import avatar from '../assets/imgs/avatar2.png'


function FinanceDeferModal({ fdef }) {
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
          alignfdefs: 'center',
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
                <label className='  text-blue-700 font-bold'> Request ID: </label>{fdef.rqst_id}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'>Student ID: </label>{fdef.stuid}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Level: </label>{fdef.clevel}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Current Semester: </label>{fdef.csem}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Deferring Semester: </label>{fdef.defsem}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Deferment Year: </label>{fdef.defyear}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Returning Semester: </label>{fdef.retsem}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Returning Year: </label>{fdef.retyear}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Reason: </label>{fdef.reason}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Specific Reasons: </label>{fdef.reason_specify}
              </div>


              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Previously deferred: </label>{fdef.prevdef}
              </div>
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Semester of previous deferment: </label>{fdef.prevdef_sem}
              </div>
              <br />
              <br />
              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> Date of Request: </label>{new Date(fdef.created_at).toISOString().slice(0, 10)}
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'>Verified By DFA on:   </label>{new Date(fdef.updated_at).toISOString().slice(0, 10)}
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

export default FinanceDeferModal;
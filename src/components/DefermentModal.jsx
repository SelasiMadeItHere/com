import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Button } from '@mui/material';
import avatar from '../assets/imgs/avatar2.png'


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',

//   boxShadow: 24,
//   p: 4,
// };

export default function DefermentModal({ fdef }) {
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
      >
        <Box className=' rounded-lg shadow-md p-4 origin-center w-full top-20 bg-white m-3 overflow-y-auto' sx={{ maxHeight: '100vh' }}>
          <Typography id="modal-modal-title" variant="h5" sx={{ fontWeight: 600 }} className=' text-center text-blue-700 border-b-2'>
            View Request Details
          </Typography>

          <Typography id="modal-modal-description">
            <div className=' p-6 '>
              <div className=' grid grid-cols-3'>
                <Avatar className=' col-start-2' src={avatar} sx={{ height: 150, width: 150 }} />
              </div>

              <div className='  py-1'>
                <label className='  text-blue-700 font-bold'> ID Number: </label>{fdef.stuid}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Level: </label>{fdef.clevel}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'> Current Semester: </label>{fdef.csem}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'> Deferment ID: </label>{fdef.rqst_id}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'> Deferment Semester: </label>{fdef.defsem}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'> Deferment Year: </label>{fdef.defyear}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Returning Year: </label>{fdef.retyear}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'> Previously Deferred Semster: </label>{fdef.prevdef}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Reason for Deferment: </label>{fdef.reason}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Detailed Reason: </label>{fdef.reason_specify}
              </div>


              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'> Date: </label>{new Date(fdef.date).toISOString().slice(0, 10)}
              </div>


              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Returning Year: </label>{fdef.retyear}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Returning Semester: </label>{fdef.retsem}
              </div>
              <br />
              <br />
              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Date of Request: </label>{new Date(fdef.created_at).toISOString().slice(0, 10)}
              </div>

              <div className='  py-1'>
                <label className=' text-blue-700 font-bold'>Verified by DFA on: </label>{new Date(fdef.updated_at).toISOString().slice(0, 10)}
              </div>
            </div>

            <div className=' text-center'>
              <Button variant='contained' color='primary' onClick={handleClose}>CLOSE</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div >
  );
}

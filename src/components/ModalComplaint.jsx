import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import FormGroup from '@mui/material/FormGroup';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px',
    borderRadius: '12px',
    boxShadow: 24,
    p: 2,
  
  };
  
  
  export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen} variant="Outlined" style={{ padding: '1px' }}>Apply</Button>

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>

           

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className=' p-3 center'>
  sdfvsdvsfvsdfvsvsfvsfvsdfvsdvsdfvsfvd
  
                {/* <ChildModal /> */}
              </div>
  
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
  
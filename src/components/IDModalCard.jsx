import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import Close from '@mui/icons-material/Close';
import {toast, ToastContainer} from 'react-toastify';


// HERE IS WHERE THE CHILD MODAL FUNCTION STARTS
function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [Id, setID] = useState("")
  const [Campus, setCampus] = useState("")
  const [Service, setService] = useState("")

  const submitRequest = () => {
    axios.post("http://localhost:5002/api/insert", {
      Id: Id,
      Campus: Campus,
      Service: Service
    })
      .then(() => {
        setID("");
        setCampus("");
        setService("");
        toast.success("DATA ADDED SUCCESSFULLY!!!!!!!");
        handleClose(); // Close the modal
      })
      .catch((err) => toast.error(err.response.data));
  }
  
  return (
    <React.Fragment>

      <button onClick={handleOpen} className=' bg-sky-700 text-white m-3 p-3 rounded-md hover:bg-sky-300'>
        ID Card Renewal
      </button>

      <ToastContainer/>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h2 id="child-modal-title" className=' text-center text-2xl font-bold'>ID Card Renewal</h2>
          <div id="child-modal-description">
            <form className=' p-6 drop-shadow-12'>
              <div className=' grid grid-cols-2 gap-3 p-6' >

                <label className=' font-bold'> ENTER YOUR ID NUMBER</label>
                <input placeholder='Enter Your ID Number'
                  className=' border-sky-800 border-2 rounded w-[100%] p-2'
                  name='id'
                  onChange={(e)=>{
                    setID(e.target.value)
                  }}
                />

                <label className=' font-bold p-2'>CAMPUS OF COLLECTION</label>
                <select className=' border-sky-800 border-2 rounded' 
                name='campus' 
                onChange={(e)=>{
                  setCampus(e.target.value)
                }}>
                  <option>--Select--</option>
                  <option>SEAVIEW</option>
                  <option>KCC Campus</option>
                </select>

                <label className=' font-bold p-2'>I am requesting for a </label>
                <select className=' border-sky-800 border-2 rounded p-2' 
                id='servicetype'
                onChange={(e)=>{
                  setService(e.target.value)
                }}>
                  <option>--Select--</option>
                  <option >Replacement</option>
                  <option>Renewal</option>
                </select>

              </div>

              <div className=' grid grid-cols-4 gap-3'>
                <Button className=' text-left col-start-2 ' onClick={handleClose} variant='contained' color='error'>Cancel</Button>
                <Button className=' text-right '
                onClick= {submitRequest} 
                variant='contained' 
                endIcon={<SendIcon />}>SUBMIT</Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function ChildTwo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [Id, setId] = useState("")
  const [Complaints, setComplaints] = useState("")


  const submitComplaint= () => {
    axios.post("http://localhost:5002/api/complain", {
      Id: Id,
      Complaints: Complaints,
    })
      .then(() => {
        setId("");
        setComplaints("");

        toast.success("COMPLAINT SUBMITTED");
        handleClose(); // Close the modal
      })
      .catch((err) => toast.error(err.response.data));
  }

  return (
    <React.Fragment>
      <button className=' bg-sky-700 text-white m-3 p-3 rounded-md hover:bg-sky-300 self-center' onClick={handleOpen}>
        Complaints
      </button>

      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 600 }}>
          <h2 id="child-modal-title" className=' text-center text-2xl font-bold'>Complaint Section</h2>
          <form className=''>
            <div className=' grid grid-cols-2 font-bold gap-1 p-6 '>
              <label>Enter Your ID Number</label>
              <input type="text" 
              name="Id" 
              className=' p-2 border-2 border-sky-800 rounded-md font-normal' 
              placeholder=' Index number' 
              onChange={(e)=>{
                setId(e.target.value)}}
              />
              
              
              <label>Please Express Your Concerns</label>
              <textarea type='text' name="Complaints" 
              className=' p-2 border-2 border-sky-00 rounded-md font-normal h-full min-h-12' 
              placeholder=' Index number'
              onChange={(e)=>{
                setComplaints(e.target.value)}}
              />

            </div>

            <div className=' grid grid-cols-4 p-6 gap-3'>
              <Button className='col-start-2' color='error' onClick={handleClose} variant='contained' endIcon={<Close />}>Cancel</Button>
              <Button onClick={submitComplaint} variant='contained' endIcon={<SendIcon />}>SUBMIT</Button>
            </div>

          </form>

        </Box>


      </Modal>
    </React.Fragment>

  )

}





//Main function
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className=' text-3xl font-bold'>
            Do you want to request a card renewal or make a complaint?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className=' p-3 center'>
              <ChildModal />
              <ChildTwo />
            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

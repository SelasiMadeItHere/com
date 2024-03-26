import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';
// import { Alert } from '@mui/material';
import config from '../Middleware/apiConfig';


// HERE IS WHERE THE CHILD MODAL FUNCTION STARTS
function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [stuid, setID] = useState("")
  const [Campus, setCampus] = useState("")
  const [Service, setService] = useState("")
  const [Email, setEmail] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const submitRequest = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const imageResponse = await axios.post(`${config.backendUrl}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (imageResponse.status === 200) {
        const customText = 'Card-'
        const rqst_id = customText + uuidv4().substring(0, 6);

        axios.post(`${config.backendUrl}/api/insert`, {
          rqst_id: rqst_id,
          stuid: stuid,
          Campus: Campus,
          Service: Service,
          Email: Email,
          imagePath: selectedFile.name,
        })
          .then((response) => {
            const data = response.data;
            if (data) {
              setID("");
              setCampus("");
              setService("");
              setEmail("");
              window.alert("YOUR REQUEST ID IS " + rqst_id);
              handleClose()
            }

          })
      }

      // Reset the form after successful upload
      setSelectedFile(null);
    } catch (error) {
      // console.error('Error uploading image:', error);
    }
  }










  return (
    <React.Fragment>

      <button onClick={handleOpen} className=' bg-sky-700 text-white m-3 p-3 rounded-md hover:bg-sky-300'>
        ID Card Renewal
      </button>

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600, }}>
          <h2 id="child-modal-title" className=' text-center text-2xl font-bold'>ID Card Renewal</h2>
          <hr className=' shadow-3xl mt-6 ' />
          <div id="child-modal-description">
            <form className=' p-6 drop-shadow-12' encType='multipart/form-data'>
              <div className=' grid grid-cols-2 gap-3 p-6' >

                <label className=' font-bold'> ENTER YOUR ID NUMBER</label>
                <input placeholder='Enter Your ID Number'
                  className=' border-sky-800 border-2 rounded w-[100%] p-2'
                  name='stuid'
                  onChange={(e) => {
                    setID(e.target.value)
                  }}
                />

                <label className=' font-bold'> ENTER YOUR EMAIL</label>
                <input
                  type='email'
                  placeholder='Enter a Valid Email Address'
                  className=' border-sky-800 border-2 rounded w-[100%] p-2'
                  name='email'
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />

                <label className=' font-bold p-2'>CAMPUS OF COLLECTION</label>
                <select className=' border-sky-800 border-2 rounded'
                  name='campus'
                  onChange={(e) => {
                    setCampus(e.target.value)
                  }}>
                  <option>--Select--</option>
                  <option>SEAVIEW</option>
                  <option>KCC Campus</option>
                </select>

                <label className=' font-bold p-2'>I AM REQUESTING FOR A </label>
                <select className=' border-sky-800 border-2 rounded p-2'
                  id='servicetype'
                  onChange={(e) => {
                    setService(e.target.value)
                  }}>
                  <option>--Select--</option>
                  <option >Replacement</option>
                  <option>Renewal</option>
                </select>



              </div>

              <div className=' text-center my-6'>
                <label className=' font-bold p-2'>UPLOAD YOUR RECEIPT </label>
                <input type="file" name="image" onChange={handleFileChange} className=' p-2' />
              </div>


              <div className=' grid grid-cols-4 gap-3'>
                <Button className=' text-left col-start-2 ' onClick={handleClose} variant='contained' endIcon={<CloseIcon />} color='error'>Cancel</Button>
                <Button className=' text-right '
                  onClick={submitRequest}
                  variant='contained'
                  id="image"
                  name="image"
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

  const [ID, setId] = useState("")
  const [Complaints, setComplaints] = useState("")


  const submitComplaint = () => {
    const customText = 'Card-'
    const rqst_id = customText + uuidv4().substring(0, 6);

    axios.post(`${config.backendUrl}/api/complain`, {
      rqst_id: rqst_id,
      ID: ID,
      Complaints: Complaints,
    })
      .then(() => {
        setId("");
        setComplaints("");

        window.alert("COMPLAINT SUBMITTED");
        handleClose(); // Close the modal
      })
      .catch((err) => window.alert(err.response.data));
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
                onChange={(e) => {
                  setId(e.target.value)
                }}
              />


              <label>Please Express Your Concerns</label>
              <textarea type='text' name="Complaints"
                className=' p-2 border-2 border-sky-800 rounded-md font-normal h-full min-h-12'
                placeholder=' Index number'
                onChange={(e) => {
                  setComplaints(e.target.value)
                }}
              />

            </div>

            <div className=' grid grid-cols-4 p-6 gap-3'>
              <Button className='col-start-2' color='error' onClick={handleClose} variant='outlined' endIcon={<CloseIcon />}>Cancel</Button>
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
  const [open, setOpen] = React.useState(false);//defau

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChildModalClose = () => {
    handleClose(); // Close the parent modal
  };


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
          <div id="modal-modal-title" className=' text-2xl fon-semibold text-center'>
            Do you want to request a card renewal or make a complaint?
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className=' p-3 center grid grid-cols-2'>
            <div className=' col-start-1 text-center'>
              <ChildModal onClose={handleChildModalClose} />
            </div>

            <div>
              <ChildTwo />
            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

import React, { useState } from 'react';
import axios from 'axios';
import { Stepper, Step, StepLabel, 
  // TextField, Button 
} from '@mui/material';

function Tracker() {
  const [id, 
    // setId
  ] = useState('');
  const [rqst_id, 
    // setTrackingId
  ] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  // const handleIdChange = (event) => {
  //   setId(event.target.value);
  // };

  // const handleTrackingIdChange = (event) => {
  //   setTrackingId(event.target.value);
  // };

  const handleStatusCheck = () => {
    axios
      .post('http://localhost:5002/api/entries', { id, rqst_id })
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

  return (
    <div className="App">
      {/* <h1>Entry Tracker</h1>
      <TextField label="ID" value={id} onChange={handleIdChange} />
      <TextField label="Tracking ID" value={rqst_id} onChange={handleTrackingIdChange} />
      <Button variant="contained" onClick={handleStatusCheck}>
        Check Status
      </Button> */}
      {error && <p>{error}</p>}
      {status && (
        <>
          <Stepper activeStep={status === 'Approved' ? 2 : status === 'Verified' ? 1 : 0} alternativeLabel>
            <Step>
              <StepLabel>Pending</StepLabel>
            </Step>
            <Step>
              <StepLabel>Verified</StepLabel>
            </Step>
            <Step>
              <StepLabel>Approved</StepLabel>
            </Step>
          </Stepper>
          <p>Status: {status}</p>
        </>
      )}
    </div>
  );
}

export default Tracker;

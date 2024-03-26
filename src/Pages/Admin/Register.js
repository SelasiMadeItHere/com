import React from 'react'
import Navbar from '../../components/Navbar'
import { Button, Card, TextField, Select, MenuItem, InputLabel, FormControl, FormGroup } from '@mui/material'
import { useState } from 'react'
import axios from 'axios';
import config from '../../Middleware/apiConfig';



function Register() {
  const [username, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [officer_name, setOfficer_name] = useState('');
  const [role, setRole] = useState('');
  // const [status, setStatus] = useState('');
  // const [error, setError] = useState('');


  const SignUp = (e) => {
    e.preventDefault();

    axios.post(`${config.backendUrl}/register`, { username, password, role, officer_name, mail })
      .then((response) => {
        if (response.status === 200) {
          alert('Reistration Successful')

        } else {
          // setError('Invalid username or password');
        }

      })
      .catch((error) => {
        console.log(error);
        // setError('Check your Credentials and Try again.');
      });
  }


  return (
    <>

      <div className='bg-blue-600 h-screen justify-items-center-'>
        <div>
          {/* <Navbar /> */}
        </div>

        <div className=' py-12'>
          <Card className='text-center justify-center rounded-md m-auto w-fit items-center'>
            <img src={require('../../assets/imgs/ait_logo.jpg')} alt='Logo' className='w-24 h-24 m-auto' />
            <br />
            <h1 className='font-bold text-xl px-12'>Login with your assigned credentials</h1>
            <br />

            <div className=' pb-12'>
              <form onSubmit={SignUp} >

                <TextField
                  placeholder='Enter Full Name'
                  type='text'
                  name='Enter '
                  label="Officer's Name"
                  variant="outlined"
                  className='p-2 w-[65%]'
                  value={officer_name}
                  onChange={(e) => setOfficer_name(e.target.value)}
                />
                <br />
                <br />


                <TextField
                  placeholder='Enter the e-mail address'
                  type='text'
                  name='email'
                  label="Email"
                  variant="outlined"
                  className='p-2 w-[65%]'
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <br /> <br />

                <InputLabel className=' text-left left-20'>Assigned Role</InputLabel>
                <Select
                  value={role}
                  id="outlined-select-currency-native"
                  placeholder='Role'
                  onChange={(e) => { setRole(e.target.value) }}
                  label="Select"
                  defaultValue="Select"
                  className=' w-[65%]'
                >
                  <MenuItem defaultValue="Select">--Select--</MenuItem>
                  <MenuItem value="Registrar">Registrar</MenuItem>
                  <MenuItem value="IDU">IDU</MenuItem>
                  <MenuItem value="DFA">DFA</MenuItem>
                </Select>
                <br /> <br />


                <TextField
                  placeholder='Enter the Staff Username'
                  type='text'
                  name='username'
                  label="Username"
                  variant="outlined"
                  className='p-2 w-[65%]'
                  value={username}
                  onChange={(e) => setUname(e.target.value)}
                />
                <br />
                <br />

                <TextField
                  placeholder='Enter their designated Password'
                  type='password'
                  name='password'
                  label="Password"
                  variant="outlined"
                  className='p-2 w-[65%]'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br /> <br />


                <Button
                  type='submit'
                  className='justify-center pb-12'
                  variant='contained'
                >
                  SUBMIT
                </Button>
              </form>
            </div>


          </Card>
        </div>
      </div>
    </>
  )
}

export default Register
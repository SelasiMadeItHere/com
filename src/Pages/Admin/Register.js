import React from 'react'
import Navbar from '../../components/Navbar'
import { Button, Card, TextField, Select, MenuItem, InputLabel, FormControl, FormGroup } from '@mui/material'
import { useState } from 'react'
import axios from 'axios';



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

    axios.post('http://localhost:5002/register', { username, password, role, officer_name, mail })
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
              <form onSubmit={SignUp} className=' p-12' >

                <TextField
                  placeholder='Enter Full Name'
                  type='text'
                  name='Enter '
                  label="Officer's Name"
                  variant="outlined"
                  className='p-6'
                  value={officer_name}
                  onChange={(e) => setOfficer_name(e.target.value)}
                />
                <br />


                <TextField
                  placeholder='Enter the e-mail address'
                  type='text'
                  name='email'
                  label="Email"
                  variant="outlined"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <br />


                <Select
                  value={role}
                  id="outlined-select-currency-native"
                  placeholder='Role'
                  onChange={(e) => { setRole(e.target.value) }}
                  label="Role"
                  type='Select'
                  className=' w-full'
                >

                  <MenuItem value="Registrar">Registrar</MenuItem>
                  <MenuItem value="IDU">IDU</MenuItem>
                  <MenuItem value="DFA">DFA</MenuItem>
                </Select>
                <br />


                <TextField
                  placeholder='Enter the Staff Username'
                  type='text'
                  name='username'
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUname(e.target.value)}
                />
                <br />


                <TextField
                  placeholder='Enter their designated Password'
                  type='password'
                  name='password'
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />


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
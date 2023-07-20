import { Button, Card, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function Login() {
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5002/api/blahblah', { uname, password })
            .then((response) => {
                if (response.data.success) {
                    setStatus(response.data.status);
                    setError('');
                } else {
                    setError(response.data.message);    
                }
            })

            .catch((error) => {
                console.log(error);
                setError('Check your Credentials and Try again.');
            });

    }

    return (
        <div className=' bg-blue-600 h-screen'>
            <div className=' pt-20'>
                <Card className=' text-center justify-center p-6 rounded-4xl m-auto w-2/5'>
                    
                    <img src={require('../assets/imgs/ait_logo.jpg')} alt='Logo' className='w-24 h-24 m-auto' />
                    {/* <br />
                    <h1 className='font-bold text-2xl'>Login</h1>
                    <br /> */}
                    <form onSubmit={login}
                    >
                        <TextField
                            placeholder='Enter your username'
                            type='text'
                            name='uname'
                            label="Username" variant="outlined"
                            value={uname}
                            onChange={(e) => setUname(e.target.value)}
                            className=' text-center p-1 w-[70]'
                        />
                        <br />
                        <br />

                        <TextField
                            placeholder='Enter your password'
                            type='password'
                            name='trackId'
                            label="Password" variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=' text-center p-1 w-[100]'
                        />
                        <br />
                        <br />
                        <Button type='submit' className='justify-center' variant='contained'
                        // onClick={handleOpenModal}
                        >
                            SUBMIT
                        </Button>
                    </form>
                </Card>

            </div>

        </div>
    )
}

export default Login
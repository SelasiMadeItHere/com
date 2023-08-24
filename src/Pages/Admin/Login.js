import { Button, Card, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function Login() {
    const [username, setUname] = useState('');
    const [password, setPassword] = useState('');
    // const [status, setStatus] = useState('');
    const [error, setError] = useState('');


    const login = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5002/login', { username, password })
            .then((response) => {
                if (response.status === 200) {
                    switch (response.data.role) {
                        case 'admin':
                            // window.location.href = response.headers.location;
                            window.location.href = '/';
                            break;
                        case 'DFA':
                            window.location.href = '/dashboard';

                            break;
                        case 'IDU':
                            window.location.href = '/idunit';

                            break;
                        case 'Registrar':

                            window.location.href = '/registrar';

                            break;
                        default:
                        //
                    }

                } else {
                    setError('Invalid username or password');
                }

            })
            .catch((error) => {
                console.log(error);
                setError('Check your Credentials and Try again.');
            });
    }


    return (
        <div className=' bg-blue-600 h-screen'>
            <div className=' p-36'>
                <Card className=' text-center justify-center p-6 rounded-4xl w-fit h-fit mx-auto'>

                    <img src={require('../../assets/imgs/ait_logo.jpg')} alt='Logo' className='w-24 h-24 m-auto' />
                    <br />
                    <h1 className='font-bold text-xl'>Login with your assigned credentials</h1>
                    <br />
                    <form onSubmit={login}
                    >
                        <TextField
                            placeholder='Enter your username'
                            type='text'
                            name='username'
                            label="Username" variant="outlined"
                            value={username}
                            onChange={(e) => setUname(e.target.value)}
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
                        />
                        <br />
                        <br />

                        <Button type='submit' className='justify-center' variant='contained' onClick={login}>
                            SUBMIT
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login
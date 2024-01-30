// import React, { useState,useEffect } from 'react';
// import {Button, TextField, Card} from '@mui/material'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login2() {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate()


//     const login = (e) => {
//         e.preventDefault();

//     axios.defaults.withCredentials = true;
//     useEffect(() => {
//         axios.get('http://localhost:5002')
//         .then(res=>{
//             if (res.data.valid){
//                 setUsername(res.data.username);
//             } else {navigate('/dashboard')}
//         }).catch(err=>console.log(err))
//     }, [])
// }


//   return (
//     <div>
//         <div className=' bg-blue-600 h-screen'>
//             <div className=' p-36'>
//                 <Card className=' text-center justify-center p-6 rounded-4xl w-fit h-fit mx-auto'>
//                     <img src={require('../../assets/imgs/ait_logo.jpg')} alt='Logo' className='w-24 h-24 m-auto' />
//                     <br />
//                     <h1 className='font-bold text-xl'>Login with your assigned credentials</h1>
//                     <br />
//                     <form onSubmit={login}>
//                         <TextField
//                             placeholder='Enter your username'
//                             type='text'
//                             name='username'
//                             label="Username" variant="outlined"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                         <br />
//                         <br />
//                         <TextField
//                             placeholder='Enter your password'
//                             type='password'
//                             name='password'
//                             label="Password" variant="outlined"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <br />
//                         <br />
//                         <Button type='submit' className='justify-center' variant='contained'>
//                             SUBMIT
//                         </Button>
//                     </form>
//                     {error && <p className="text-red-500">{err}</p>}
//                 </Card>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login2
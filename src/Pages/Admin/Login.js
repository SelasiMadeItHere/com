// import { Button, Card, TextField } from '@mui/material'
// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';


// function Login() {
//     const [username, setUname] = useState('');
//     const [password, setPassword] = useState('');
//     // const [status, setStatus] = useState('');
//     const [error, setError] = useState('');

//     // const login = (e) => {
//     //     e.preventDefault();


//     //     axios.post('http://localhost:5002/api/login', { username, password })
//     //         .then((response) => {
//     //             if (response.status === 200 && response.data.state === 1) {
//     //                 switch (response.data.role) {
//     //                     case 'admin':
//     //                         window.location.href = '/';
//     //                         break;
//     //                     case 'DFA':
//     //                         window.location.href = '/dashboard';
//     //                         break;
//     //                     case 'IDU':
//     //                         window.location.href = '/idunit';
//     //                         break;
//     //                     case 'Registrar':
//     //                         window.location.href = '/registrar';
//     //                         break;
//     //                     default:
//     //                     // Handle other roles if needed
//     //                 }
//     //             } else {
//     //                 setError('Invalid username or password');
//     //                 window.alert("CHECK YOUR USERNAME AND TRY AGAIN")
//     //             }
//     //         })
//     //         .catch((error) => {
//     //             if (error.response && error.response.status === 500) {
//     //               console.error('500 Internal Server Error:', error.response.data);
//     //               setError('An error occurred on the server. Please try again later.');
//     //             } else {
//     //               // Handle other errors
//     //             }
//     //           });
//     // }


//     const login = (e) => {
//         e.preventDefault();
      
//         axios.post('http://localhost:5002/api/login', { username, password })
//           .then((response) => {
//             if (response.status === 200) {
//               const { role } = response.data;
//               switch (role) {
//                 case 'admin':
//                   window.location.href = '/';
//                   break;
//                 case 'DFA':
//                     window.location.href='/dashboard'
//                 case 'IDU':
//                   window.location.href = '/admincardrenewal';
//                   break;
//                 case 'Registrar':
//                   window.location.href = '/registrar';
//                   break;
//                 default:
//                   // Handle other roles if needed
//               }
//             } else {
//               setError('Invalid username or password');
//               window.alert("CHECK YOUR USERNAME AND TRY AGAIN");
//             }
//           })
//           .catch((error) => {
//             if (error.response && error.response.status === 500) {
//               console.error('500 Internal Server Error:', error.response.data);
//               setError('An error occurred on the server. Please try again later.');
//             } else {
//               console.log(error);
//               setError('Check your credentials and try again.');
//             }
//           });
//       };


//     return (
//         <div className=' bg-blue-600 h-screen'>
//             <div className=' p-36'>
//                 <Card className=' text-center justify-center p-6 rounded-4xl w-fit h-fit mx-auto'>

//                     <img src={require('../../assets/imgs/ait_logo.jpg')} alt='Logo' className='w-24 h-24 m-auto' />
//                     <br />
//                     <h1 className='font-bold text-xl'>Login with your assigned credentials</h1>
//                     <br />
//                     <form onSubmit={login}
//                     >
//                         <TextField
//                             placeholder='Enter your username'
//                             type='text'
//                             name='username'
//                             label="Username" variant="outlined"
//                             value={username}
//                             onChange={(e) => setUname(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <TextField
//                             placeholder='Enter your password'
//                             type='password'
//                             name='trackId'
//                             label="Password" variant="outlined"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}

//                         />
//                         <br />
//                         <br />

//                         <Button type='submit' className='justify-center' variant='contained'>
//                             SUBMIT
//                         </Button>
//                     </form>
//                 </Card>
//             </div>
//         </div>
//     )
// }

// export default Login





import { Button, Card, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
      
        axios.post('http://localhost:5002/login', { username, password })
          .then((response) => {
            if (response.status === 200) {
              const { role, state } = response.data;
              if (state === 1) {
                switch (role) {
                  case 'admin':
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
                    // Handle other roles if needed
                }
              } else {
                setError('Invalid username or password');
                window.alert("CHECK YOUR USERNAME AND TRY AGAIN");
              }
            } else {
              setError('An error occurred. Please try again later.');
            }
          })
          .catch((error) => {
            // console.error(error);
            setError('An error occurred. Please try again later.');
          });
      };

    return (
        <div className=' bg-blue-600 h-screen'>
            <div className=' p-36'>
                <Card className=' text-center justify-center p-6 rounded-4xl w-fit h-fit mx-auto'>
                    <img src={require('../../assets/imgs/ait_logo.jpg')} alt='Logo' className='w-24 h-24 m-auto' />
                    <br />
                    <h1 className='font-bold text-xl'>Login with your assigned credentials</h1>
                    <br />
                    <form onSubmit={login}>
                        <TextField
                            placeholder='Enter your username'
                            type='text'
                            name='username'
                            label="Username" variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br />
                        <br />
                        <TextField
                            placeholder='Enter your password'
                            type='password'
                            name='password'
                            label="Password" variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        <br />
                        <Button type='submit' className='justify-center' variant='contained'>
                            SUBMIT
                        </Button>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                </Card>
            </div>
        </div>
    )
}

export default Login;

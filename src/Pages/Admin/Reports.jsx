// // ReportsPage.js

// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const ReportsPage = () => {
//   const [timeRange, setTimeRange] = useState('months');
//   const [requestData, setRequestData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, [timeRange]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5001/api/requests?timeRange=${timeRange}`);
//       setRequestData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Reports Page</h1>
//       <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
//         <option value="months">By Months</option>
//         <option value="weeks">By Weeks</option>
//       </select>
//       <LineChart width={600} height={300} data={requestData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="months" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="requestCount" stroke="#8884d8" activeDot={{ r: 8 }} />
//       </LineChart>
//     </div>
//   );
// };

// export default ReportsPage;


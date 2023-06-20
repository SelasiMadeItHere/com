import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Charts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Retrieve data from the database and set it in the state
    fetchDataFromDatabase().then((data) => {
      setChartData(data);
    });
  }, []);

  const fetchDataFromDatabase = async () => {
    // Perform an API request to retrieve data from the database
    const response = await fetch('http://localhost:5002/api/getCard');
    const data = await response.json();
    return data;
  };

  // const data = [
  //   { name: "ID Cards", value: 205 },
  //   { name: 'Deferment ', value: 73 },
  //   { name: 'Certificate ', value: 124 },
  //   { name: 'Transcript ', value: 222 },
  // ]

  return (

    <BarChart width={400} height={300} data={chartData}>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3 " />
      <Tooltip />
      <Legend />
      <Bar type="monotone" dataKey="value" stroke="#8884d8" />
    </BarChart>
    // </ResponsiveContainer>
  )
}

export default Charts
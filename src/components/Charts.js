import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {
  // Inside your functional component
const [chartData, setChartData] = useState([]);

const fetchDataFromDatabase = async () => {
  try {
    const response = await fetch('http://localhost:5002/reportscalc');
    const responseData = await response.json();

    // Map the data to Recharts format
    const mappedData = [
      { label: 'Pending', value: responseData.data.pending },
      { label: 'Verified', value: responseData.data.verified },
      { label: 'Approved', value: responseData.data.approved }
    ];

    setChartData(mappedData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchDataFromDatabase();
}, []);


  return (
    <div>
      <h1>Bar Chart Example</h1>
      <BarChart width={600} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" name="Value" />
      </BarChart>
    </div>
  );
};

export default Chart;

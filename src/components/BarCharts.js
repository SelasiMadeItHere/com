import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import config from '../Middleware/apiConfig';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await fetch(`${config.backendUrl}/reportscalc`);
      const responseData = await response.json();

      // Map the data to Recharts format
      const mappedData = [
        { label: 'Pending', value: responseData.data.pending, fill: "red" },
        { label: 'Verified', value: responseData.data.verified, fill: "#FFC714" },
        { label: 'Approved', value: responseData.data.approved, fill: "#3B82F6" }
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
    <Card className=' '>
      <div className=' pr-6 rounded-2xl '>
        <div className=' text-center p-4 text-xl font-bold'>ID Cards Requests</div>
        <BarChart width={300} height={200} data={chartData} barSize={40} className=' text-white'>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#8884d8" name="Value" />
        </BarChart>
      </div>
    </Card>
  );
};

export default Chart;

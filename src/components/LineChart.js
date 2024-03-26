import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import config from '../Middleware/apiConfig';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await fetch(`${config.backendUrl}/reportscalcIntL`);
      const responseData = await response.json();

      // Map the data to Recharts format
      const mappedData = [
        { label: 'Pending', value: responseData.data.pending, fill: "red" },
        { label: 'Verified', value: responseData.data.verified, fill: "yellow" },
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
    <Card className=' rounded-2xl '>
      <div className=' pr-6'>
        <div className=' text-center p-4 text-xl font-bold'>Introductory Letter Requests</div>
        <AreaChart width={300} height={200} data={chartData} className=' text-white' margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>

          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Area dataKey={chartData} name="Value" />
          <Area type="monotype" dataKey="value" fill="#3B82F6" name="Value" stroke="#8884d8" fillOpacity={1} />
        </AreaChart>
      </div>
    </Card>
  );
};

export default Chart;

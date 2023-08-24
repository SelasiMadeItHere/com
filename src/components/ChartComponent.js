import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DataFilter from './DataFilter';

function ChartComponent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/requests'); // Replace with your API URL
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (selectedYear, selectedMonth) => {
    if (selectedYear === '' && selectedMonth === '') {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter(entry => {
      const entryYear = entry.year; // Replace with the actual year field name
      const entryMonth = entry.month; // Replace with the actual month field name
      
      if (selectedYear === '' || entryYear === selectedYear) {
        return selectedMonth === '' || entryMonth === selectedMonth;
      }

      return false;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Request States</h1>
      <DataFilter onFilterChange={handleFilterChange} />
      <BarChart width={600} height={400} data={filteredData}>
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="0" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="1" fill="#8884d8" name="Requests" />
      </BarChart>
    </div>
  );
}

export default ChartComponent;

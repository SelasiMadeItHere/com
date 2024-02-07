import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const Chart = () => {
    const [chartData, setChartData] = useState([]);

    const fetchDataFromDatabase = async () => {
        try {
            const response = await fetch('http://localhost:5002/reportscalcdef');
            const responseData = await response.json();

            // Map the data to Recharts format
            const mappedData = [
                { label: 'Pending', value: responseData.data.pending, fill:'red' },
                { label: 'Verified', value: responseData.data.verified, fill:'#FFC714' },
                { label: 'Approved', value: responseData.data.approved, fill:'#3B82F6' }
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
        <Card className=' rounded-2xl'>
            <div className=' pr-6 '>
                <div className=' text-center p-4 text-2xl font-bold'>Deferments</div>
                <PieChart width={300} height={200}>
                    <Pie data={chartData} dataKey="value" nameKey="label" cx="50%" cy="50%"  />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </div>
        </Card>
    );
};

export default Chart;

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const Charts = () => {

    const data = [
        { name: "ID Cards", value: 205 },
        { name: 'Deferment ', value: 73 },
        { name: 'Certificate ', value: 124 },
        { name: 'Transcript ', value: 622 },
    ]

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </ResponsiveContainer>
    )
}

export default Charts
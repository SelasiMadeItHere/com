import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Charts = () => {

  const data = [
    { name: "ID Cards", value: 205 },
    { name: 'Deferment ', value: 73 },
    { name: 'Certificate ', value: 124 },
    { name: 'Transcript ', value: 622 },
  ]

  return (

    <BarChart width={400} height={200} data={data} barSize={20}>
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip labelClassName=' border-none'/>
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="value" fill="#4D77FF" background={{ fill: '#eee' }} />
    </BarChart>
    // </ResponsiveContainer>
  )
}

export default Charts
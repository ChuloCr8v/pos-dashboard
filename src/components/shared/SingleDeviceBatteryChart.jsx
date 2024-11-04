import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Sample data representing battery levels over time
const data = [
    { time: '8:00 AM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '9:00 AM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '10:00 AM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '11:00 AM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '12:00 PM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '1:00 PM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '2:00 PM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '3:00 PM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '4:00 PM', battery: Math.floor(Math.random() * 100) + 1 },
    { time: '5:00 PM', battery: Math.floor(Math.random() * 100) + 1 }
]

const BatteryChart = () => {
    return (
        <ResponsiveContainer width={775} height={200}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} className="text-xs">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="battery" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default BatteryChart

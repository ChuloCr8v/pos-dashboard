import React from 'react'
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const data = [
    {
        name: 'Lagos',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Abuja',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Kano',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Port Harcourt',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Enugu',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Kaduna',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Ibadan',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Benin City',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Jos',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Calabar',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    },
    {
        name: 'Uyo',
        battery: Math.floor(Math.random() * 100) + 1,
        ram: Math.floor(Math.random() * 100) + 1
    }
]

export default function BarChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">All Devices Statistics</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <Chart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="battery" fill="#0ea5e9" />
                        <Bar dataKey="ram" fill="#ea580c" />
                    </Chart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

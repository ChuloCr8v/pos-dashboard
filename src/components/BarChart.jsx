import React from 'react'
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const data = [
    {
        name: 'Lagos',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Abuja',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Kano',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Port Harcourt',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Enugu',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Kaduna',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Ibadan',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Benin City',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Jos',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Calabar',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    },
    {
        name: 'Uyo',
        CPU: Math.floor(Math.random() * 40) + 1,
        RAM: Math.floor(Math.random() * 40) + 1
    }
]

export default function BarChart() {
    return (
        <div className="h-[24rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">All Devices Statistics (RAM/CPU)</strong>
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
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar radius={[100, 100, 0, 0]} dataKey="CPU" fill="#0ea5e9" />
                        <Bar radius={[100, 100, 0, 0]} dataKey="RAM" fill="#ea580c" />
                    </Chart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

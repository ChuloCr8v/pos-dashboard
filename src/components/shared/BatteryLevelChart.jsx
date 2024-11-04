import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { posDevices } from '../../dummy/posData.jsx'

const BatteryLevelChart = () => {
    // Map data from posDevices, assuming batteryLevel is a property in each device
    const data = posDevices.map((item) => ({
        name: item.deviceName,
        value: item.batteryLevel // Use value for the dataKey in Area component
    }))

    return (
        <ResponsiveContainer width="100%" height={300} className={'bg-white rounded py-4 pt-6 text-xs'}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <defs>
                    <linearGradient id="colorBattery" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    dataKey="value" // Change to match the key in your data
                    stroke="#8884d8" // Set a solid color for the line border
                    strokeWidth={2}
                    fill="url(#colorBattery)" // Use the gradient for the fill
                    width={1000}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default BatteryLevelChart

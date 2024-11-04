import React from 'react'
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BarChart(props) {
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
                        <XAxis dataKey={props.xAxisDataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={props.barOneDataKey} fill="#0ea5e9" />
                        <Bar dataKey={props.barTwoDataKey} fill="#ea580c" />
                    </Chart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

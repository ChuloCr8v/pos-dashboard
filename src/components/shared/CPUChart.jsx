import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    defs,
    linearGradient,
    stop
} from 'recharts'

// Sample data for CPU and Memory Usage over time
const cpuMemoryData = [
    { time: '8:00 AM', cpu: Math.floor(Math.random() * 100) + 1, memory: Math.floor(Math.random() * 100) + 1 },
    { time: '9:00 AM', cpu: Math.floor(Math.random() * 100) + 1, memory: Math.floor(Math.random() * 100) + 1 },
    { time: '10:00 AM', cpu: Math.floor(Math.random() * 100) + 1, memory: Math.floor(Math.random() * 100) + 1 },
    { time: '11:00 AM', cpu: Math.floor(Math.random() * 100) + 1, memory: Math.floor(Math.random() * 100) + 1 },
    { time: '12:00 PM', cpu: Math.floor(Math.random() * 100) + 1, memory: Math.floor(Math.random() * 100) + 1 }
]

// AreaChart component with gradient fill for CPU and Memory usage
const CpuMemoryAreaChart = () => (
    <ResponsiveContainer width={750} height={200} className={'text-xs'}>
        <AreaChart data={cpuMemoryData}>
            <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cpu" stroke="#8884d8" fill="url(#cpuGradient)" name="CPU Usage (%)" />
            <Area
                type="monotone"
                dataKey="memory"
                stroke="#82ca9d"
                fill="url(#memoryGradient)"
                name="Memory Usage (%)"
            />
        </AreaChart>
    </ResponsiveContainer>
)

export default CpuMemoryAreaChart

import React from 'react'
import BatteryChart from './shared/SingleDeviceBatteryChart'
import CpuMemoryChart from './shared/CPUChart'

const DeviceHealth = () => {
    return (
        <div className="w-full space-y-4">
            <div className="space-y-3 w-full">
                <Title title={'Battery Health Status'} />
                <div className="-ml-8 w-full">
                    <BatteryChart />
                </div>
            </div>
            <div className="space-y-3 w-full">
                <Title title={'CPU/Memory Usage Statistics'} />
                <div className="-ml-8">
                    <CpuMemoryChart />
                </div>
            </div>
        </div>
    )
}

export default DeviceHealth

const Title = (props) => {
    return <div className="text-base font-semibold">{props.title}</div>
}

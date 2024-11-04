import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import Devices from '../components/Devices'

export default function AllDevices() {
    return (
        <div className="space-y-4">
            <p className="text-2xl font-semibold capitalize">All Devices</p>
            <DashboardStatsGrid />
            <Devices />
        </div>
    )
}

import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import BatteryLevelChart from '../components/shared/BatteryLevelChart'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold capitalize">Dashboard</p>
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <BarChart />
                <PieChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <BatteryLevelChart />
            </div>
        </div>
    )
}

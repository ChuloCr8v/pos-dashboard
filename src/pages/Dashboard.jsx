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
            <div className="grid grid-cols-8 w gap-4 w-full">
                <div className="col-span-6">
                    <BarChart />
                </div>
                <div className="col-span-2">
                    <PieChart />
                </div>
            </div>
            <div className="flex flex-row gap-4 w-full">
                <BatteryLevelChart />
            </div>
        </div>
    )
}

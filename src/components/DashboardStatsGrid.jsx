import React from 'react'
import { IoList, IoCheckmarkCircleOutline } from 'react-icons/io5'

export default function DashboardStatsGrid() {
    return (
        <div className="flex gap-4">
            <BoxWrapper>
                <div className="rounded-full h-9 w-9 p-1 flex items-center justify-center bg-primary bg-opacity-20">
                    <IoList className="text-primary text-2xl" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light leading-none">Total Devices</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold  leading-none">10</strong>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className="rounded-full h-9 w-9 p-1 flex items-center justify-center bg-green-600 bg-opacity-20">
                    <IoCheckmarkCircleOutline className="text-green-600 text-2xl" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light leading-none">Active Devices</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold leading-none">8</strong>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className="rounded-full h-9 w-9 p-1 flex items-center justify-center bg-red-600 bg-opacity-20">
                    <IoCheckmarkCircleOutline className="text-red-600 text-2xl" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light leading-none">Inactive Devices</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold leading-none">2</strong>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return (
        <div className="bg-white rounded-md p-4 py-2 flex-1 border border-gray-200 flex items-center">{children}</div>
    )
}

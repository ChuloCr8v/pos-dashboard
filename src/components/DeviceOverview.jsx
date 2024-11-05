import React from 'react'
import StatusTag from './shared/StatusTag'

const DeviceOverview = (props) => {
    const data = [
        {
            label: 'Device Name',
            value: props.data.deviceName
        },
        {
            label: 'Location',
            value: props.data.location
        },
        {
            label: 'Carrier Network',
            value: props.data.carrierNetwork
        },
        {
            label: 'Card Reader Status',
            value: <StatusTag status={props.data.cardReaderStatus} />
        },
        {
            label: 'Manufacturer',
            value: props.data.manufacturer
        },
        {
            label: 'Model',
            value: props.data.model
        },
        {
            label: 'Network Status',
            value: <StatusTag status={props.data.networkStatus} />
        },
        {
            label: 'Internal Memory',
            value: `${props.data.internalMemory} GB`
        },
        {
            label: 'External Memory',
            value: `${props.data.externalMemory} GB`
        },
        {
            label: 'IP Address',
            value: props.data.ipAddress
        },
        {
            label: 'Battery Level',
            value: `${props.data.batteryLevel}%`
        },
        {
            label: 'RAM Usage',
            value: props.data.ramUsage
        }
    ]

    return (
        <div className="">
            {(props.data.networkStatus?.toLowerCase() === 'disconnected' ||
                props.data.cardReaderStatus?.toLowerCase() === 'faulty') && (
                <div className="border border-red-600 bg-red-100 rounded-md px-4 leading-none pb-1.5 mb-4 py-1 text-center w-fit text-red-600">
                    NOTE. {props.data?.deviceName} is currently out of service!
                </div>
            )}
            <div className="grid grid-cols-2 gap-y-4">
                {data.map((item) => (
                    <div className="space-y-1" key={item.label}>
                        <p className="font-semibold uppercase text-gray-400 text-xs">{item.label}</p>
                        <p className="capitalize text-500">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeviceOverview

import { Table } from 'antd'
import StatusTag from './shared/StatusTag'
import DeviceDetail from './shared/DeviceDetail'
import { useState } from 'react'
import { posDevices } from '../dummy/posData'

const columns = [
    {
        title: 'SN',
        dataIndex: 'sn',
        key: 'sn',
        align: 'center',
        render: (_text, _record, index) => {
            return index + 1
        }
    },
    {
        title: 'Device Name',
        dataIndex: 'deviceName',
        key: 'deviceName'
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location'
    },
    {
        title: 'Manufacturer',
        dataIndex: 'manufacturer',
        key: 'manufacturer'
    },
    {
        title: 'Network Status',
        dataIndex: 'networkStatus',
        key: 'networkStatus',
        render: (_text, record) => {
            return <StatusTag status={record.networkStatus} />
        }
    },
    {
        title: 'Card Reader Status',
        dataIndex: 'cardReaderStatus',
        key: 'cardReaderStatus',
        render: (_text, record) => {
            return <StatusTag status={record.cardReaderStatus} />
        }
    }
]

export default function Devices() {
    const [openDeviceDetail, setOpenDeviceDetail] = useState({ isOpen: false, data: [] })

    return (
        <div className="space-y-2">
            <strong className="text-gray-700 font-medium text-xl">Device List</strong>
            <Table
                size="small"
                className="bg-white border rounded-md"
                columns={columns}
                dataSource={posDevices}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            setOpenDeviceDetail({ isOpen: true, data: record })
                        }
                    }
                }}
            />

            <DeviceDetail
                isOpen={openDeviceDetail.isOpen}
                setIsOpen={setOpenDeviceDetail}
                data={openDeviceDetail.data}
            />
        </div>
    )
}

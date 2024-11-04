import { Drawer, Tabs } from 'antd'
import React, { useState } from 'react'
import DeviceOverview from '../DeviceOverview'
import DeviceHealth from '../DeviceHealth'

const DeviceDetail = (props) => {
    const [currentKey, setCurrentKey] = useState(1)

    const handleClose = () => {
        props.setIsOpen({ isOpen: false, data: [] })
    }

    const items = [
        {
            key: '1',
            label: 'Device Overview',
            children: <DeviceOverview data={props.data} />
        },
        {
            key: '2',
            label: 'Device Health',
            children: <DeviceHealth />
        }
    ]

    return (
        <Drawer
            open={props.isOpen}
            width={currentKey === '2' ? 800 : undefined}
            closeIcon={() => null}
            onClose={handleClose}
            className="device-detail"
        >
            <Tabs
                onChange={(value) => setCurrentKey(value)}
                defaultActiveKey={currentKey}
                items={items}
                className="-translate-y-4"
            />
        </Drawer>
    )
}

export default DeviceDetail

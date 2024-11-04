import React from 'react'
import { IoBanOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoWarningOutline } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

const StatusTag = (props) => {
    const style = () => {
        switch (props.status?.toLowerCase()) {
            case 'ok':
            case 'active':
            case 'connected':
                return 'text-green-600 bg-green-600 border-green-600'
            case 'faulty':
                return 'text-yellow-600 bg-yellow-600 border-yellow-600'
            case 'disconnected':
                return 'text-red-600 bg-red-600 border-red-600'
            case 'inactive':
                return 'text-gray-600 bg-gray-600 border-gray-600'

            default:
                break
        }
    }

    const icon = () => {
        switch (props.status?.toLowerCase()) {
            case 'ok':
            case 'active':
            case 'connected':
                return <IoCheckmarkCircleOutline />
            case 'disconnected':
                return <IoCloseCircleOutline />
            case 'faulty':
                return <IoWarningOutline />
            case 'inactive':
                return <IoBanOutline />
            default:
                break
        }
    }

    return (
        <div
            className={twMerge(
                'uppercase text-xs bg-opacity-10 rounded-full flex items-center gap-2 w-fit px-2 py-1',
                style()
            )}
        >
            <span className="text-lg">{icon()}</span>
            <p>{props.status}</p>
        </div>
    )
}

export default StatusTag

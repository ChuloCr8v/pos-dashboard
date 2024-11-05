import { HiOutlinePhone, HiOutlineViewGrid } from 'react-icons/hi'
import { IoServerOutline } from 'react-icons/io5'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },

    {
        key: 'devices',
        label: 'Devices',
        path: '/devices',
        icon: <IoServerOutline />
    }
]

import { HiOutlinePhone, HiOutlineViewGrid } from 'react-icons/hi'

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
        icon: <HiOutlinePhone />
    }
]

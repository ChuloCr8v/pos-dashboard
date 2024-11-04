import classNames from 'classnames'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-primary hover:bg-opacity-20 duration-200 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="bg-blue-50 w-60 p-3 flex flex-col">
            <div className="flex flex-col justify-center items-center gap-2 px-1 py-3 ">
                <img src="/miro.png" alt="miro pos observability" className="w-16" />
                <span className="text-center text-sm -mt-1 text-gray-600 uppercase">Miro Observability</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
        </div>
    )
}

function SidebarLink({ link }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-primary text-white' : 'text-black', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}

import React from 'react'
import './SideBar.scss'


import { NavLink } from "react-router-dom"
import { v4 } from 'uuid';

import { BiSolidArchive , BiSolidTrash } from 'react-icons/Bi';
import { FaNoteSticky } from "react-icons/fa6"


const navItems = [{ icon: <BiSolidArchive />, title: 'Archive', id: v4() },
{ icon: <BiSolidTrash />, title: 'Trash', id: v4() }]

const SideBar = () => {
    return (
        <div className="sidebar">
            <div>Logo</div>
            <ul>

                <li>
                    <NavLink to='/'>
                        <div className="sidebar-content-items"><FaNoteSticky /><span>Notes</span></div>
                    </NavLink>
                </li>

                {
                    navItems.map(({ icon, title, id }) =>

                    (<li key={id}>
                        <NavLink
                            to={`/${title.toLowerCase()}`} >
                            <div className="sidebar-content-items">{icon}<span>{title}</span></div>
                        </NavLink>
                    </li>)
                    )
                }

            </ul>
        </div >
    )
}

export default SideBar
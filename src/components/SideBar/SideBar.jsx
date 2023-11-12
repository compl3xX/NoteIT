import './SideBar.scss'

import { v4 } from 'uuid';
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";


import { BiSolidArchive, BiSolidTrash } from 'react-icons/bi';
import { FaNoteSticky } from "react-icons/fa6"
import { AiFillTag } from 'react-icons/ai'



const navItems = [{ icon: <BiSolidArchive />, title: 'Archive', id: v4() },

{ icon: <BiSolidTrash />, title: 'Trash', id: v4() }]

const SideBar = () => {

    const tags = useSelector(state => state.tag.tagList)

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
                        tags.map(({ tagName, id }) => (
                            <li key={id}>
                                <NavLink to={`/tag/${tagName}`}>
                                    <div className="sidebar-content-items"><AiFillTag />{tagName}</div></NavLink>
                            </li>
                        ))
                    }

                

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
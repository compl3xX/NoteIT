import React from 'react'
import './SideBar.scss'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div>Logo</div>
            <ul>
                <li>Notes</li>
                <li>Archives</li>
                <li>Trash</li>
            </ul>
        </div>
    )
}

export default SideBar
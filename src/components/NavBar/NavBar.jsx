import React from 'react'
import './NavBar.scss'

import { useLocation } from "react-router-dom"

const NavBar = () => {

    const location = useLocation();
    
    return (
        <div className="NavBar">{location.pathname}</div>
    )
}

export default NavBar
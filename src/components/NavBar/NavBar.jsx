import React from 'react'
import './NavBar.scss'
import { useDispatch ,useSelector} from "react-redux"
import { toggleCreateNodeModal } from "../../features"

import { useLocation } from "react-router-dom"

const NavBar = () => {

    const dispatch = useDispatch();

    const location = useLocation();

    return (
        <div className="NavBar">
            <button onClick={() => { dispatch(toggleCreateNodeModal(true)) }}>Create</button>
        </div>
    )
}

export default NavBar
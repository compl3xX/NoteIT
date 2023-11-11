import { createPortal } from "react-dom"
import './BaseModal.scss'
import { toggleCreateNodeModal } from "../../../features"

import { useDispatch } from "react-redux"


const BaseModal = ({ children }) => {

    const dispatch = useDispatch();

    console.log(children)
    return (

        createPortal(
            <div className="modal" onClick={() => { dispatch(toggleCreateNodeModal(false)) }}>
                {children}
            </div>, document.body)

    )

}

export default BaseModal
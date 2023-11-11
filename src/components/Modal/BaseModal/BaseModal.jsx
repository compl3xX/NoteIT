import { createPortal } from "react-dom"
import './BaseModal.scss'
import { toggleCreateNodeModal } from "../../../features"

import { useDispatch } from "react-redux"


const BaseModal = ({ children }) => {

    const dispatch = useDispatch();

    const handleClose = () => {

        dispatch(toggleCreateNodeModal(false))
    }


    return (

        createPortal(
            <div className="modal" onClick={handleClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>, document.body)

    )

}

export default BaseModal

// 
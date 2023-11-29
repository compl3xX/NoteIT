import { createPortal } from "react-dom"
import { FaTimes } from "react-icons/fa";
import './BaseModal.scss'
import { toggleCreateNodeModal } from "../../../features"

import { useDispatch } from "react-redux"


const BaseModal = ({ children, closeModal }) => {


    const dispatch = useDispatch();

    const handleClose = () => {

        closeModal()
    }


    return (

        createPortal(
            <div className="modal" >
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <FaTimes className="close-btn" onClick={handleClose}/>
                    {children}
                </div>
            </div>, document.body)

    )

}

export default BaseModal

// 

import { useSelector } from "react-redux"
import TextEditor from "../../TextEditor/TextEditor"

import './CreateNoteModal.scss'
import BaseModal from "../BaseModal/BaseModal"

const CreateNoteModal = () => {

    const modal = useSelector(state => state.modal.createNoteModal)


    return (
        modal && (<BaseModal><TextEditor /></BaseModal>)

    )
}

export default CreateNoteModal
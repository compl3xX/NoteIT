
import './CreateNoteModal.scss'
import { useSelector } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import TextEditor from "../../TextEditor/TextEditor"

const CreateNoteModal = () => {

    const modal = useSelector(state => state.modal.createNoteModal)


    return (
        modal && (<BaseModal >
            <div>
                <TextEditor />
            </div>
        </BaseModal>)

    )
}

export default CreateNoteModal
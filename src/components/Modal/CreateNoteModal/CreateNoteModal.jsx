
import './CreateNoteModal.scss'
import { useSelector, useDispatch } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import TextEditor from "../../TextEditor/TextEditor"
import { toggleCreateNodeModal } from "../../../features"

const CreateNoteModal = () => {

    const modal = useSelector(state => state.modal.createNoteModal)

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleCreateNodeModal(false))
    }


    return (
        modal && (
            <BaseModal closeModal={closeModal}>
                <div>
                    <TextEditor />
                </div>
            </BaseModal>
        )

    )
}

export default CreateNoteModal
import { useSelector, useDispatch } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import { toggleCreateTagModal } from "../../../features";

const CreateTagModal = () => {

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleCreateTagModal(false))
    }
    const modal = useSelector(state => state.modal.tagModal)
    return (
        modal && <BaseModal closeModal={closeModal}>
            <div>CreateTagModal</div>
        </BaseModal>
    )
}

export default CreateTagModal
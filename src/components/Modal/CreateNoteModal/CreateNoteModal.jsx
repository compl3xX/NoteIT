
import './CreateNoteModal.scss'
import { useDispatch, useSelector } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import TextEditor from "../../TextEditor/TextEditor"
import { toggleCreateNodeModal } from "../../../features"
import CreateTagModal from "../CreateTagModal/CreateTagModal"
import { useState } from "react"
import { v4 } from "uuid"

const CreateNoteModal = () => {

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const [priority, setPriority] = useState('Low')

    const [selTags, setSelTags] = useState([]);

    const dispatch = useDispatch();

    const { addTagModal, createNoteModal } = useSelector(state => state.modal)

    const closeModal = () => {
        dispatch(toggleCreateNodeModal(false))
    }

    const handelTags = ({ tag, type }) => {
        if (type === 'add') {
            setSelTags([...selTags, { tagName: tag, id: v4() }]);
        }
        else {
            setSelTags(selTags.filter((selTag) => selTag.tagName !== tag))
        }
    }


    return (

        <BaseModal closeModal={closeModal}>

            <div>
                {addTagModal && <CreateTagModal handelTags={handelTags} selTags={selTags} />}
                <TextEditor editorProps={{
                    title, setTitle, content,
                    setContent, setPriority, priority, selTags, setSelTags, handelTags
                }} />
            </div>
        </BaseModal>



    )
}

export default CreateNoteModal
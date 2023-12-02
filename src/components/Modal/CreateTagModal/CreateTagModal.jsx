import { useSelector, useDispatch } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import { toggleCreateTagModal, addTag, delTag, rmTagNote } from "../../../features";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import './CreateTagModal.scss'



const CreateTagModal = ({ mode, handelTags, selTags }) => {

    const [tagName, setTagName] = useState('')


    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleCreateTagModal({ type: 'add', view: false }))
        dispatch(toggleCreateTagModal({ type: 'edit', view: false }))
    }

    const tags = useSelector(state => state.tag.tagList)

    const { editTagModal } = useSelector(state => state.modal)

    const submitTag = () => {
        if (tagName.length > 0) {
            dispatch(addTag(tagName))
            setTagName('');
        }
    }

    const addtagToNote = ({ tagName, type }) => {

        type === 'add' ? handelTags({ tag: tagName, type: "add" }) :
            handelTags({ tag: tagName, type: "del" })

    }

    const rmTagNotes = ({ id, tagName }) => {
        dispatch(delTag(id))
        dispatch(rmTagNote(tagName))
    }



    return (
        <BaseModal closeModal={closeModal}>
            <div className="tag-container">
                <div className="tag-inputs">
                    <input onChange={(e) => setTagName(e.target.value)} value={tagName} />
                    <button onClick={submitTag}>Submit</button>
                </div>

                {tags.map((tag) => (

                    <li key={tag.id}>

                        {tag.tagName}

                        {mode === 'edit'
                            ? <><RxCross2 onClick={() => { rmTagNotes({ id: tag.id, tagName: tag.tagName }) }} /></>
                            : <>{selTags?.find((selTag) => (selTag.tagName === tag.tagName)) ?
                                (<FaMinus onClick={() => { addtagToNote({ tagName: tag.tagName, type: 'del' }) }} />) :
                                (<FaPlus onClick={() => { addtagToNote({ tagName: tag.tagName, type: 'add' }) }} />)}</>
                        }


                    </li>
                ))}
            </div>
        </BaseModal>
    )
}

export default CreateTagModal
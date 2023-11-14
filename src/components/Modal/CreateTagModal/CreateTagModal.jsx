import { useSelector, useDispatch } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import { toggleCreateTagModal, addTag } from "../../../features";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";



const CreateTagModal = ({ handelTags, selTags }) => {

    const [tag, setTag] = useState('')


    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleCreateTagModal({ type: 'add', view: false }))
    }

    const tags = useSelector(state => state.tag.tagList)

    const submitTag = () => {
        dispatch(addTag(tag))
    }

    const addtagToNote = (tagName) => {
        handelTags({ tag: tagName, type: "add" })
    }


    return (
        <BaseModal closeModal={closeModal}>
            <div>
                <input onChange={(e) => setTag(e.target.value)} />
                <button onClick={submitTag}>Submit</button>
                {tags.map((tag) => (
                    <li key={tag.id}
                        onClick={() => { addtagToNote(tag.tagName) }}>
                        {tag.tagName}
                        {selTags?.find((selTag) => (selTag.tagName === tag.tagName)) ?
                            (<FaMinus />) : (<FaPlus />)}

                    </li>
                ))}
            </div>
        </BaseModal>
    )
}

export default CreateTagModal
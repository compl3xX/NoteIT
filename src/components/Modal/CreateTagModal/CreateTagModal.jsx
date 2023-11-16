import { useSelector, useDispatch } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import { toggleCreateTagModal, addTag } from "../../../features";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";



const CreateTagModal = ({ handelTags, selTags }) => {

    const [tagName, setTagName] = useState('')


    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleCreateTagModal({ type: 'add', view: false }))
    }

    const tags = useSelector(state => state.tag.tagList)

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

    return (
        <BaseModal closeModal={closeModal}>
            <div>
                <input onChange={(e) => setTagName(e.target.value)} value={tagName} />
                <button onClick={submitTag}>Submit</button>
                {tags.map((tag) => (
                    <li key={tag.id}
                    >
                        {tag.tagName}

                        {selTags?.find((selTag) => (selTag.tagName === tag.tagName)) ?
                            (<FaMinus onClick={() => { addtagToNote({ tagName: tag.tagName, type: 'del' }) }} />) :
                            (<FaPlus onClick={() => { addtagToNote({ tagName: tag.tagName, type: 'add' }) }} />)}

                    </li>
                ))}
            </div>
        </BaseModal>
    )
}

export default CreateTagModal
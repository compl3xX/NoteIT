import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { noteAdd, toggleCreateNodeModal, toggleCreateTagModal } from "../../features";

import { v4 } from "uuid";
import { getTimeDate, getValidateForm } from "../../utils";
import { FaTimes } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextEditor = ({ editorProps }) => {

    const { title, setTitle, content, setContent, selTags,
        setSelTags, priority, setPriority, handelTags, EditNote } = editorProps;


    const { time, date } = getTimeDate();

    const titleRef = useRef();
    const contentRef = useRef();

    const dispatch = useDispatch();


    let note = {
        title,
        content,
        bgColor: 'green',
        priority,
        tag: selTags,
        isPinned: false
    }

    if (EditNote) {
        note = { ...EditNote, ...note }
    }
    else {
        note = { ...note, id: v4(), date, time }
    }


    const handelSubmit = () => {

        const valid = getValidateForm({ title, content })


        if (valid === 3) {
            dispatch(noteAdd(note))
            dispatch(toggleCreateNodeModal(false))
            setContent('');
            setTitle('');
            setPriority('Low')
            setSelTags([])
        }
        else {

            if (valid === 0) {
                toast.info("Provide Title and Content", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })

            }
            else if (valid === 1) {
                toast.info("Provide Title", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                titleRef.current.focus();
            }
            else {
                toast.info("Provide Content", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                contentRef.current.focus();
            }

        }



    }

    return (
        <div >
            <p>Title</p>
            <input ref={titleRef} onChange={(e) => { setTitle(e.target.value) }} value={title} />
            <p>Content</p>
            <textarea ref={contentRef}
                onChange={(e) => { setContent(e.target.value) }}
                style={{ height: "200px", width: "600px", resize: "none" }}
                value={content} />
            <div>
                {
                    selTags.map((seltag) => (<span key={seltag.id}>
                        {seltag.tagName}
                        <FaTimes onClick={() => { handelTags({ tag: seltag.tagName, type: 'del' }) }} />
                    </span>))
                }
            </div>

            <div>
                <button onClick={() => { dispatch(toggleCreateTagModal({ type: 'add', view: true })) }}>Tag</button>
                <label>
                    Priority:
                    <select onChange={e => setPriority(e.target.value)} value={priority}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>
                <button onClick={handelSubmit}>Submit</button>
            </div>
            <ToastContainer autoClose={1000} />
        </div>
    )
}

export default TextEditor

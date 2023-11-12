import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { noteAdd, toggleCreateNodeModal } from "../../features";
import useOutsideClick from "../../customHook/useOutsideClick";
import { v4 } from "uuid";
import { getTimeDate, getValidateForm } from "../../utils";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextEditor = () => {

    const [title, setTile] = useState('');

    const [content, setContent] = useState('');

    const [priority, setPriority] = useState('Low')

    const { time, date } = getTimeDate();

    const titleRef = useRef();
    const contentRef = useRef();

    const dispatch = useDispatch();


    const note = {
        title,
        content,
        bgColor: 'green',
        priority,
        tag: 'quote',
        id: v4(),
        date,
        time,
        isPinned: false
    }

    // useOutsideClick(ref, () => {
    //     dispatch(noteAdd(note))
    // })

    const handelSubmit = () => {

        const valid = getValidateForm({ title, content })


        if (valid === 3) {
            dispatch(noteAdd(note))
            dispatch(toggleCreateNodeModal(false))
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
            <input ref={titleRef} onChange={(e) => { setTile(e.target.value) }} />
            <p>Content</p>
            <textarea ref={contentRef} onChange={(e) => { setContent(e.target.value) }} style={{ height: "200px", width: "600px", resize: "none" }} />
            <div>
                <button>Tag</button>
                <label>
                    Priority:
                    <select onChange={e => setPriority(e.target.value)} defaultValue="Low">
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

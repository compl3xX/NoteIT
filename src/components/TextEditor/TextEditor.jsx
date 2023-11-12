import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { noteAdd } from "../../features";
import useOutsideClick from "../../customHook/useOutsideClick";
import { v4 } from "uuid";
import { getTimeDate } from "../../utils";

const TextEditor = () => {

    const [title, setTile] = useState('');

    const [content, setContent] = useState('');

    const [priority, setPriority] = useState('Low')

    const { time, date } = getTimeDate();

    const ref = useRef();
    
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

    useOutsideClick(ref, () => {
        dispatch(noteAdd(note))
    })

    return (
        <div ref={ref}>
            <p>Title</p>
            <input onChange={(e) => { setTile(e.target.value) }} />
            <p>Content</p>
            <textarea onChange={(e) => { setContent(e.target.value) }} style={{ height: "200px", width: "600px", resize: "none" }} />
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
            </div>
        </div>
    )
}

export default TextEditor

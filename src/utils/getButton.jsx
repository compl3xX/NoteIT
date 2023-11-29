import { addToArchive, addToTrash, editNote, toggleCreateNodeModal, unArchiveNote, unTrashNote, deleteNote } from "../features"

import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux"

const getButton = ({ type, note, dispatch }) => {

    const editHandler = () => {
        dispatch(editNote(note))
        dispatch(toggleCreateNodeModal(true))
    }

    if (type === 'archive') {
        return (
            < div className="get-btn" >
                <MdOutlineUnarchive onClick={() => { dispatch(unArchiveNote(note)) }} />
                <FaTrash onClick={() => { dispatch(addToTrash({ note, type: 'archive' })) }} />
            </div >
        )
    }
    else if (type === 'trash') {
        return (
            < div className="get-btn">
                <FaTrashCanArrowUp onClick={() => { dispatch(unTrashNote(note)) }} />
                <FaTrash onClick={() => { dispatch(deleteNote({ note, type: 'trash' })) }} />
            </div >
        )
    }
    else {
        return (
            <div className="get-btn">
                <MdOutlineArchive onClick={() => { dispatch(addToArchive(note)) }} />
                <FaTrash onClick={() => { dispatch(addToTrash({ note, type: 'else' })) }} />
                <FaEdit onClick={editHandler}/>
            </div>
        )
    }


}

export default getButton
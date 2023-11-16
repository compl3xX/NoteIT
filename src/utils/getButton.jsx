import { addToArchive, addToTrash, editNote, toggleCreateNodeModal, unArchiveNote, unTrashNote, deleteNote } from "../features"

import { useDispatch } from "react-redux"

const getButton = ({ type, note, dispatch }) => {

    const editHandler = () => {
        dispatch(editNote(note))
        dispatch(toggleCreateNodeModal(true))
    }

    if (type === 'archive') {
        return (
            < div >
                <button onClick={() => { dispatch(unArchiveNote(note)) }}>unarchive</button>
                <button onClick={() => { dispatch(deleteNote({ note, type: 'archive' })) }}>trash</button>
            </div >
        )
    }
    else if (type === 'trash') {
        return (
            < div >
                <button onClick={() => { dispatch(unTrashNote(note)) }}>restore</button>
                <button onClick={() => { dispatch(deleteNote({ note, type: 'trash' })) }}>delete</button>
            </div >
        )
    }
    else {
        return (
            <div>
                <button onClick={() => { dispatch(addToArchive(note)) }}>Archive</button>
                <button onClick={() => { dispatch(addToTrash(note)) }}>Trash</button>
                <button onClick={editHandler}>Edit</button>
            </div>
        )
    }


}

export default getButton
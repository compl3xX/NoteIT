import { addToArchive, addToTrash } from "../features"

import { useDispatch } from "react-redux"

const getButton = ({ type, note, dispatch }) => {

    // const dispatch = useDispatch()

    if (type === 'archive') {
        return (
            < div >
                <button>unarchive</button>
                <button>trash</button>
            </div >
        )
    }
    else if (type === 'trash') {
        return (
            < div >
                <button>restore</button>
                <button>delete</button>
            </div >
        )
    }
    else {
        return (
            <div>
                <button onClick={() => { dispatch(addToArchive(note)) }}>Archive</button>
                <button onClick={() => { dispatch(addToTrash(note)) }}>Trash</button>
            </div>
        )
    }


}

export default getButton
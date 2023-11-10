import React from 'react'
import { NoteCard } from "../../components"

import { useSelector} from "react-redux"

const AllNotes = () => {

    const allNotes = useSelector(state => state.note.allNotes)


    return (
        <div>
            <NoteCard notes={allNotes} />
        </div>
    )
}

export default AllNotes
import React from 'react'
import { CreateNoteModal, NoteCard } from "../../components"

import { useSelector } from "react-redux"

    
const AllNotes = () => {

    const allNotes = useSelector(state => state.note.allNotes)


    return (
        <div>
            <CreateNoteModal/>
            <NoteCard notes={allNotes} />
        </div>
    )
}

export default AllNotes
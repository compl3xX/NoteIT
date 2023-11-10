import React from 'react'
import { NoteCard } from "../../components"
import { useSelector } from "react-redux"


const ArchiveNotes = () => {

    const archive = useSelector(state => state.note.archiveNotes)

    return (
        <div>
            <NoteCard notes={archive} />
        </div>
    )
}

export default ArchiveNotes
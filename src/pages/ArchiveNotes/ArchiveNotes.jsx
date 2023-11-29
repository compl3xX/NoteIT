import React from 'react'
import { NoteCard, StyleWrapper } from "../../components"
import { useSelector } from "react-redux"


const ArchiveNotes = () => {

    const archive = useSelector(state => state.note.archiveNotes)
    const searched = useSelector(state => state.search.searched)
    const searchedNotes = useSelector(state => state.search.searchedNotes)

    let notes = archive;

    if (searched.length > 0) notes = searchedNotes

    return (
        <StyleWrapper>
            <NoteCard notes={notes} type="archive" />
        </StyleWrapper>
    )
}

export default ArchiveNotes
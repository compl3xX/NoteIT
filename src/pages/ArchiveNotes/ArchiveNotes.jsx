import React from 'react'
import { NoteCard, StyleWrapper } from "../../components"
import { useSelector } from "react-redux"


const ArchiveNotes = () => {

    const archive = useSelector(state => state.note.archiveNotes)
    const searched = useSelector(state => state.search.searched)
    const searchedNotes = useSelector(state => state.search.searchedNotes)

    const dateFilteredNotes = useSelector(state => state.filter.datefiltered)
    const priorityFilteredNotes = useSelector(state => state.filter.priorityfiltered)
    const filterOn = useSelector(state => state.filter.filterOn)

    let notes = archive;

    if (searched.length > 0) notes = searchedNotes

    if (filterOn.length > 0) notes = filterOn === 'date' ? dateFilteredNotes : priorityFilteredNotes

    

    return (
        <StyleWrapper>
            <NoteCard notes={notes} type="archive" />
        </StyleWrapper>
    )
}

export default ArchiveNotes

import { NoteCard, Sections, StyleWrapper } from "../../components"

import { useSelector } from "react-redux"

import './AllNotes.scss'


const AllNotes = () => {

    const allNotes = useSelector(state => state.note.allNotes)
    const searched = useSelector(state => state.search.searched)
    const searchedNotes = useSelector(state => state.search.searchedNotes)
    const filterOn = useSelector(state => state.filter.filterOn)
    const dateFilteredNotes = useSelector(state => state.filter.datefiltered)
    const priorityFilteredNotes = useSelector(state => state.filter.priorityfiltered)

    let notes = allNotes;

    if (searched.length > 0) notes = searchedNotes

    if (filterOn.length > 0) notes = filterOn === 'date' ? dateFilteredNotes : priorityFilteredNotes

    const pinnedNotes = notes.filter((note) => (note.isPinned))

    const notPinnedNotes = notes.filter((note) => (!note.isPinned))

    notes = notPinnedNotes

    return (
        <StyleWrapper>
            <Sections pinnedNotes={pinnedNotes} notes={notes} />
        </StyleWrapper>
    )
}

export default AllNotes
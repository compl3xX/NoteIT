
import { NoteCard, StyleWrapper } from "../../components"

import { useSelector } from "react-redux"


const AllNotes = () => {

    const allNotes = useSelector(state => state.note.allNotes)
    const searched = useSelector(state => state.search.searched)
    const searchedNotes = useSelector(state => state.search.searchedNotes)
    const filterOn = useSelector(state => state.filter.filterOn)
    const dateFilteredNotes = useSelector(state => state.filter.datefiltered)

    let notes = allNotes;

    if (searched.length > 0) notes = searchedNotes

    if (filterOn)notes=dateFilteredNotes

    return (
        <StyleWrapper>
            <NoteCard notes={notes} type="allnotes" />
        </StyleWrapper>
    )
}

export default AllNotes
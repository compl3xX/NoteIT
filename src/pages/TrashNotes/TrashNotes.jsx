import { useSelector } from "react-redux"
import { NoteCard, StyleWrapper } from "../../components"

const TrashNotes = () => {

    const trash = useSelector(state => state.note.trashNotes)
    const searched = useSelector(state => state.search.searched)
    const searchedNotes = useSelector(state => state.search.searchedNotes)
    const dateFilteredNotes = useSelector(state => state.filter.datefiltered)
    const priorityFilteredNotes = useSelector(state => state.filter.priorityfiltered)
    const filterOn = useSelector(state => state.filter.filterOn)



    let notes = trash;

    if (searched.length > 0) notes = searchedNotes

    if (filterOn.length > 0) notes = filterOn === 'date' ? dateFilteredNotes : priorityFilteredNotes

    return (
        <StyleWrapper>
            <NoteCard notes={notes} type="trash" />
        </StyleWrapper>
    )
}

export default TrashNotes
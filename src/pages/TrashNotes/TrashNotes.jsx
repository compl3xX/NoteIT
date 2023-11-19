import { useSelector } from "react-redux"
import { NoteCard } from "../../components"

const TrashNotes = () => {

    const trash = useSelector(state => state.note.trashNotes)
    const searched = useSelector(state => state.search.searched)
    const searchedNotes = useSelector(state => state.search.searchedNotes)

    let notes = trash;

    if (searched.length > 0) notes = searchedNotes

    return (
        <NoteCard notes={notes} type="trash" />
    )
}

export default TrashNotes
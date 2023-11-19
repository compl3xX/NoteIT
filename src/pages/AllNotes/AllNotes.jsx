
import { NoteCard } from "../../components"

import { useSelector } from "react-redux"


const AllNotes = () => {

    const allNotes = useSelector(state => state.note.allNotes)
    const searched = useSelector(state => state.search.searched)
    const searchedNotes = useSelector(state => state.search.searchedNotes)

    let notes = allNotes;

    if (searched.length > 0) notes = searchedNotes

    return (
        <div>
            <NoteCard notes={notes} type="allnotes" />
        </div>
    )
}

export default AllNotes
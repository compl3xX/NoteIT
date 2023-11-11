import { useSelector } from "react-redux"
import { NoteCard } from "../../components"

const TrashNotes = () => {

    const trash = useSelector(state => state.note.trashNotes)

    return (
         <NoteCard notes={trash} type="trash"/>
    )
}

export default TrashNotes
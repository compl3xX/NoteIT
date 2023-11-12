import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { NoteCard } from "../../components";

const Tag = () => {

    const notes = useSelector(state => state.note.allNotes)

    const { name } = useParams();

    const tagNotes = notes.filter((note) => (note.tag === name))

    return (

        <NoteCard notes={tagNotes} />
    )
}

export default Tag
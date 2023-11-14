import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { NoteCard } from "../../components";

const Tag = () => {

    const notes = useSelector(state => state.note.allNotes)

    const { name } = useParams();


    let tagNotes = []

    notes.forEach((note) => {
        if (note.tag.find(({ tagName }) => (tagName === name))) tagNotes.push(note)
    });

    console.log(tagNotes)

    return (

        <NoteCard notes={tagNotes} />
    )
}

export default Tag
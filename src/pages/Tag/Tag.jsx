import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { NoteCard } from "../../components";

const Tag = () => {

    const allnotes = useSelector(state => state.note.allNotes)

    const { name } = useParams();


    let tagNotes = []

    allnotes.forEach((note) => {
        if (note.tag.find(({ tagName }) => (tagName === name))) tagNotes.push(note)
    });

    let notes=tagNotes

    const searched = useSelector(state => state.search.searched)
    
    const searchedNotes = useSelector(state => state.search.searchedNotes)


    if (searched.length > 0) notes = searchedNotes

    console.log(tagNotes)

    return (

        <NoteCard notes={notes} />
    )
}

export default Tag
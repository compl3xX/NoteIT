import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { NoteCard, StyleWrapper,Sections } from "../../components";


const Tag = () => {

    const allnotes = useSelector(state => state.note.allNotes)

    const { name } = useParams();


    let tagNotes = []

    allnotes.forEach((note) => {
        if (note.tag.find(({ tagName }) => (tagName === name))) tagNotes.push(note)
    });

    let notes = tagNotes

    const searched = useSelector(state => state.search.searched)

    const searchedNotes = useSelector(state => state.search.searchedNotes)


    if (searched.length > 0) notes = searchedNotes

    const pinnedNotes = notes.filter((note) => (note.isPinned))

    const notPinnedNotes = notes.filter((note) => (!note.isPinned))

    notes = notPinnedNotes

    console.log(tagNotes)

    return (
        <StyleWrapper>
            <Sections pinnedNotes={pinnedNotes} notes={notes} />
        </StyleWrapper>
    )
}

export default Tag
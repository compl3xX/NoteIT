import { useSelector, useDispatch } from "react-redux"
import BaseModal from "../BaseModal/BaseModal"
import { dateFilter, toggleFilterModal, clearFilter } from "../../../features"
import { useLocation } from "react-router-dom"



const FilterModal = () => {

    const dispatch = useDispatch()

    const { pathname } = useLocation()

    const closeModal = () => {
        dispatch(toggleFilterModal(false))
    }

    let notes;

    const searched = useSelector(state => state.search.searched)

    const searchedNote = useSelector(state => state.search.searchedNotes)

    const allnotes = useSelector(state => state.note.allNotes)

    const trashNotes = useSelector(state => state.note.trashNotes)

    const archiveNotes = useSelector(state => state.note.archiveNotes)

    let tagNotes = []

    allnotes.forEach((note) => {
        if (note.tag.find(({ tagName }) => (tagName === pathname.slice(5)))) tagNotes.push(note)
    });


    if (pathname === '/') notes = allnotes
    else if (pathname === '/archive') notes = archiveNotes
    else if (pathname === '/trash') notes = trashNotes
    else notes = tagNotes

    if (searched.length > 0) {
        notes = searchedNote;
    }


    console.log(notes)


    return (
        <BaseModal closeModal={closeModal}>
            <div>
                <div>Date :-
                    <button onClick={() => { dispatch(dateFilter({ notes, type: 'lowToHigh' })) }}>INC</button>
                    <button>DEC</button>
                </div>
                <div>Priority :-
                    <button>INC</button>
                    <button>DEC</button>
                </div>
                <button onClick={() => { dispatch(clearFilter()) }}>Remove Filter</button>
            </div>
        </BaseModal>
    )
}

export default FilterModal
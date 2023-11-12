import React from 'react'
import { CreateNoteModal, NoteCard } from "../../components"

import { useSelector } from "react-redux"
import CreateTagModal from "../../components/Modal/CreateTagModal/CreateTagModal"



const AllNotes = () => {

    const allNotes = useSelector(state => state.note.allNotes)


    return (
        <div>
            <CreateNoteModal />
            <CreateTagModal/>
            <NoteCard notes={allNotes} type="allnotes" />
        </div>
    )
}

export default AllNotes
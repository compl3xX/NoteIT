import { useSelector, useDispatch } from "react-redux";
import './ViewNoteModal.scss'
import { viewNote } from "../../../features";
import React from 'react'
import BaseModal from "../BaseModal/BaseModal";

const ViewNoteModal = ({ note }) => {

    const dispatch = useDispatch()


    const closeModal = () => {
        dispatch(viewNote({ isDetailed: note.isDetailed, noteId: note.id }))
    }

    return (
        <BaseModal closeModal={closeModal}>
            <div className="note-content">{note.content}</div>
        </BaseModal>
    )
}

export default ViewNoteModal
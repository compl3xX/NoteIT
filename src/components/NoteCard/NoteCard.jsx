import React, { useState } from 'react'
import './NoteCard.scss'
import { TbPinnedFilled, TbPinned } from 'react-icons/tb'
import { useDispatch } from "react-redux"
import { addToArchive } from "../../features"


const NoteCard = ({ notes }) => {

    const [isArchive,setisArchived]=useState(false);

    const dispatch = useDispatch();

    return (
        <div className="note-card" >
            {notes.map((note) => (
                <div key={note.id}>
                    <span>{note.isPinned ? <TbPinnedFilled /> : <TbPinned />}</span>
                    <span>{note.title}</span>
                    <p>{note.content}</p>
                    <p>{note.tag}</p>
                    <p>{note.date}</p>
                    <p>{note.time}</p>
                    <p>{note.priority}</p>
                    <button onClick={() => { dispatch(addToArchive(note.id)) }}>Archive</button>
                </div>

            ))}
        </div>
    )
}

export default NoteCard
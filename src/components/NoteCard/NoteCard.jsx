import React, { } from 'react'
import './NoteCard.scss'
import { TbPinnedFilled, TbPinned } from 'react-icons/tb'

import { getButton } from "../../utils"


const NoteCard = ({ notes, type }) => {


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
                    {getButton({ type, note })}
                </div>

            ))}
        </div>
    )
}

export default NoteCard
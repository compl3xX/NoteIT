import React, { } from 'react';
import './NoteCard.scss'
import { TbPinnedFilled, TbPinned } from 'react-icons/tb'

import { getButton } from "../../utils"
import { useDispatch } from "react-redux"
import { pinNote } from "../../features"


const NoteCard = ({ notes, type }) => {

    const dispatch = useDispatch();

    return (

        notes.map((note) => (
            <div key={note.id} className="note-card" >
                <span onClick={() => { dispatch(pinNote({ isPinned: note.isPinned, noteId: note.id })) }}>{note.isPinned ? <TbPinnedFilled /> : <TbPinned />}</span>
                <span>{note.title}</span>
                <p>{note.content}</p>
                <p>{note.tag.map((t) => (<span key={t.id}>{t.tagName}</span>))}</p>
                <p>{note.date}</p>
                <p>{note.time}</p>
                <p>{note.priority}</p>
                {getButton({ type, note, dispatch })}
            </div>

        ))

    )
}

export default NoteCard
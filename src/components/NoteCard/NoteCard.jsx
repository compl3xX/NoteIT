import React, { } from 'react';
import './NoteCard.scss'
import { TbPinnedFilled, TbPinned } from 'react-icons/tb'

import { getButton } from "../../utils"
import { useDispatch } from "react-redux"
import { pinNote, viewNote } from "../../features"
import ViewNoteModal from "../Modal/ViewNoteModal/ViewNoteModal";


const NoteCard = ({ notes, type }) => {

    const dispatch = useDispatch();

    console.log(notes.length)

    return (

        notes.length > 0 ?
            notes.map((note) => (
                <div key={note.id}>
                    {note.isDetailed && <ViewNoteModal note={note} />}
                    < div key={note.id} className="note-card" >

                        <div className="note-card-title">
                            <span onClick={() => { dispatch(pinNote({ isPinned: note.isPinned, noteId: note.id })) }}>{note.isPinned ? <TbPinnedFilled /> : <TbPinned />}</span>
                            <span>{note.title}</span>
                        </div>

                        <p onClick={() => dispatch(viewNote({ isDetailed: note.isDetailed, noteId: note.id }))}>{note.content.length > 25 ? note.content.slice(0, 25) + "...." : note.content}</p>
                        <p>{note.tag.map((t) =>
                            (<span className="note-card-tag " key={t.id}>{t.tagName}</span>))}</p>

                        <div className="note-card-btn">
                            <p className={`${note.priority === 'High'
                                ? "high-priority" : note.priority === 'Medium' ? "mid-priority" : "low-priority"} note-card-priority`}>
                                {note.priority}
                            </p>
                            {getButton({ type, note, dispatch })}
                        </div>

                        <div className="note-card-time-date">
                            <p>{note.date}</p>
                            <p>{note.time}</p>
                        </div>
                    </div >
                </div>

            )) : <p className="note-card-empty">There are no required Notes</p>

    )
}

export default NoteCard
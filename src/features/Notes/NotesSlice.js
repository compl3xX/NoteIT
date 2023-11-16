import { createSlice } from "@reduxjs/toolkit";
import { notesData } from "../../store/notesData";

const initialState = {
    allNotes: [...notesData],
    archiveNotes: [],
    trashNotes: [],
    editNote: null
};


const NotesSlice = createSlice({
    name: 'Notes',
    initialState,
    reducers: {

        noteAdd: (state, { payload }) => {
            console.log(payload)
            const idx = state.allNotes.findIndex(({ id }) => (id === payload.id))
            if (idx >= 0) {
                state.allNotes[idx] = payload
            }
            else state.allNotes.push(payload)
        },

        addToArchive: (state, { payload }) => {
            state.archiveNotes.push(payload)
            state.allNotes = state.allNotes.filter(note => note.id !== payload.id)
        },

        addToTrash: (state, { payload }) => {
            state.trashNotes.push(payload)
            state.allNotes = state.allNotes.filter(note => note.id !== payload.id)
        },

        editNote: (state, { payload }) => {
            state.editNote = payload
            console.log(payload)
        },

        pinNote: (state, { payload }) => {
            const idx = state.allNotes.findIndex(({ id }) => (id === payload.noteId))
            state.allNotes[idx].isPinned = !payload.isPinned
        },

        unArchiveNote: (state, { payload }) => {
            state.allNotes.push(payload)
            state.archiveNotes = state.archiveNotes.filter(note => note.id !== payload.id)
        },

        unTrashNote: (state, { payload }) => {
            state.allNotes.push(payload)
            state.trashNotes = state.trashNotes.filter(note => note.id !== payload.id)
        },

        deleteNote: (state, { payload }) => {

            if (payload.type === 'trash') state.trashNotes = state.trashNotes.filter(note => note.id !== payload.note.id)
            else state.archiveNotes = state.archiveNotes.filter(note => note.id !== payload.note.id)
        }

    }
})

export default NotesSlice.reducer

export const { noteAdd, addToArchive, addToTrash, editNote, pinNote, unArchiveNote, unTrashNote, deleteNote } = NotesSlice.actions;
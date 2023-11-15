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
        }


    }
})

export default NotesSlice.reducer

export const { noteAdd, addToArchive, addToTrash, editNote } = NotesSlice.actions;
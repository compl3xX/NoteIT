import { createSlice } from "@reduxjs/toolkit";
import { notesData } from "../../store/notesData";

const initialState = {
    allNotes: [...notesData],
    archiveNotes: [],
    trashNotes: [],
};


const NotesSlice = createSlice({
    name: 'Notes',
    initialState,
    reducers: {

        noteAdd: (state, { payload }) => {
            state.allNotes.push(payload)
        },

        addToArchive: (state, { payload }) => {
            state.archiveNotes.push(payload)
            state.allNotes = state.allNotes.filter(note => note.id !== payload.id)
        },

        addToTrash: (state, { payload }) => {
            state.trashNotes.push(payload)
            state.allNotes = state.allNotes.filter(note => note.id !== payload.id)
        }



    }
})

export default NotesSlice.reducer

export const { noteAdd, addToArchive, addToTrash } = NotesSlice.actions;
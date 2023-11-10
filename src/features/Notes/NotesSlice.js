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

        noteAdd: (state, action) => {
            state.allNotes.push(action.payload)
        },

        addToArchive: (state, action) => {
            const note = state.allNotes.find(note => note.id === action.payload)
            state.archiveNotes.push(note)
            state.allNotes = state.allNotes.filter(note => note.id !== action.payload)
        },

        addToTrash: (state, action) => {
            const note = state.archiveNotes.find(note => note.id === action.payload)
            state.allNotes.push(note)
            state.archiveNotes = state.archiveNotes.filter(note => note.id !== action.payload)

        }

    }
})

export default NotesSlice.reducer

export const { noteAdd, addToArchive ,addToTrash} = NotesSlice.actions;
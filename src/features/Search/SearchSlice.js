import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searched: '',
    searchedNotes: []
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

        searchTerm: (state, { payload }) => {
            console.log(payload)
            state.searched = payload
        },
        searchNotes: (state, { payload }) => {
            console.log(payload)
            state.searchedNotes = payload
        }
    }
})


export default SearchSlice.reducer

export const { searchTerm, searchNotes } = SearchSlice.actions
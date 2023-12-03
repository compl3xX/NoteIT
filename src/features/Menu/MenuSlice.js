import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isOpen: false

};

const menuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers: {
        toggleMenu: (state, { payload }) => {
            state.isOpen = payload
        }
    }
})

export const { toggleMenu } = menuSlice.actions
export default menuSlice.reducer
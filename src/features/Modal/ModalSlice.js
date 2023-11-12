import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    createNoteModal: false,

    tagModal: false

};

const ModalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {

        toggleCreateNodeModal: (state, { payload }) => {
            state.createNoteModal = payload
        },

        toggleCreateTagModal: (state, { payload }) => {
            console.log(payload)
            state.tagModal = payload
        }

    }

})

export const { toggleCreateNodeModal ,toggleCreateTagModal} = ModalSlice.actions

export default ModalSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    createNoteModal: false,

    filterModal: false

};

const ModalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {

        toggleCreateNodeModal: (state, { payload }) => {
            console.log(payload)
            state.createNoteModal = payload
        }

    }

})

export const { toggleCreateNodeModal } = ModalSlice.actions

export default ModalSlice.reducer
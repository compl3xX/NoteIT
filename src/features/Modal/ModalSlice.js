import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    createNoteModal: false,

    addTagModal: false,

    editTagModal: false,

    filterModal: false

};

const ModalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {

        toggleCreateNodeModal: (state, { payload }) => {
            state.createNoteModal = payload
        },

        toggleCreateTagModal: (state, { payload }) => {

            const { type, view } = payload

            if (type === 'add') state.addTagModal = view

            else state.editTagModal = view

        },

        toggleFilterModal: (state, { payload }) => {
            state.filterModal = payload
        }
           
            
    }

})

export const { toggleCreateNodeModal, toggleCreateTagModal, toggleFilterModal } = ModalSlice.actions

export default ModalSlice.reducer
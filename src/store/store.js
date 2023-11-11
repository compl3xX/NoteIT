import { configureStore } from "@reduxjs/toolkit";

import { NotesReducer, ModalReducer } from "../features";

export default configureStore({
    reducer: {
        note: NotesReducer,
        modal: ModalReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";

import { NotesReducer, ModalReducer, TagReducer } from "../features";

export default configureStore({
    reducer: {
        note: NotesReducer,
        modal: ModalReducer,
        tag: TagReducer
    }
})
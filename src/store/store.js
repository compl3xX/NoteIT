import { configureStore } from "@reduxjs/toolkit";

import { NotesReducer, ModalReducer, TagReducer, SearchReducer } from "../features";

export default configureStore({
    reducer: {
        note: NotesReducer,
        modal: ModalReducer,
        tag: TagReducer,
        search: SearchReducer
    }
})
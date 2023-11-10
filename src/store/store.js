import { configureStore } from "@reduxjs/toolkit";

import { NotesReducer } from "../features";

export default configureStore({
    reducer: {
        note: NotesReducer
    }
})
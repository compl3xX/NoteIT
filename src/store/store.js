import { configureStore } from "@reduxjs/toolkit";

import { NotesReducer, ModalReducer, TagReducer, SearchReducer, FilterReducer, MenuReducer } from "../features";

export default configureStore({
    reducer: {
        note: NotesReducer,
        modal: ModalReducer,
        tag: TagReducer,
        search: SearchReducer,
        filter: FilterReducer,
        menu: MenuReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tagList: [
        { tagName: 'quote', id: v4() }
    ]
}

const TagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {

        addTag: (state, { payload }) => {
            state.tagList.push({ tagName: payload, id: v4() })
        }

    }

})

export const { addTag } = TagSlice.actions;

export default TagSlice.reducer
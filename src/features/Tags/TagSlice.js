import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const initialState = {
    tagList: [
        { tagName: 'quote', id: v4() },
        { tagName: 'work', id: v4() }
    ]
}

const TagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {

        addTag: (state, { payload }) => {

            if (state.tagList.find(({ tagName }) => (tagName === payload))) {
                toast.warning("Tag already exists");
            }
            else state.tagList.push({ tagName: payload, id: v4() })
        },

        delTag: (state, { payload }) => {

            state.tagList = state.tagList.filter(({ id }) => id !== payload)

        }

    }

})

export const { addTag, delTag } = TagSlice.actions;

export default TagSlice.reducer
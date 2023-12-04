import { createSlice } from "@reduxjs/toolkit";
import { filterDate, filterPriority } from "../../utils";

const initialState = {

    datefiltered: [],
    priorityfiltered: [],
    filterOn: ""

}


const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

        dateFilter: (state, { payload }) => {

            const { notes, type, filterType } = payload

            state.datefiltered = filterDate({ notes, type })

            state.filterOn = filterType

            console.log(state.datefiltered)

        },

        priorityFilter: (state, { payload }) => {

            const { notes, type, filterType } = payload

            state.priorityfiltered = filterPriority({ notes, type })

            state.filterOn = filterType

            console.log(state.priorityfiltered)
        },

        clearFilter: (state, action) => {
            state.filterOn = ""
            state.datefiltered = []
            state.priorityfiltered = []
            console.log(state.datefiltered)
        }

    }
})


export const { dateFilter, priorityFilter, clearFilter } = FilterSlice.actions

export default FilterSlice.reducer



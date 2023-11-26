import { createSlice } from "@reduxjs/toolkit";
import { filterDate } from "../../utils";

const initialState = {

    datefiltered: [],
    priorityfiltered: [],
    filterOn: false

}


const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

        dateFilter: (state, { payload }) => {

            state.datefiltered = filterDate(payload)
            state.filterOn = true

            console.log(state.datefiltered)

        },

        priorityFilter: (state, { payload }) => {

        },

        clearFilter: (state, action) => {
              state.filterOn=false
              state.datefiltered=[]
              console.log(state.datefiltered)
        }

    }
})


export const { dateFilter, priorityFilter ,clearFilter} = FilterSlice.actions

export default FilterSlice.reducer



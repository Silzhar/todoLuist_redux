import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name: 'navbar',

    initialState: {
        urgentOpen: false,
    },

    reducers: {
        urgentStatus: (state) => {
            state.urgentOpen = !state.urgentOpen
        }
    }

})

// Actions.
export const { urgentStatus } = navbarSlice.actions

//Selectors.
export const selectUrgentStatus = (state) => state.urgentStatus

export default navbarSlice.reducer
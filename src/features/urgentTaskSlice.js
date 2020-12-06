import { createSlice } from '@reduxjs/toolkit'

export const urgentTaskSlice = createSlice ({
    name: 'urgentTask',

    initialState: {
        createCardUrgent: [],
        
    },

    reducers: {
        valuesUrgentTask: (state, action) => {
            state.createCardUrgent = action.payload
        }
    }
})

// Actions.
export const { valuesUrgentTask } = urgentTaskSlice.actions

// Selectors.
export const selectCreateCardurgent = (state) => state.urgentTask.createCardUrgent

export default urgentTaskSlice.reducer
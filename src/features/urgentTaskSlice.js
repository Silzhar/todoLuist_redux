import { createSlice } from '@reduxjs/toolkit'


export const urgentTaskSlice = createSlice ({
    name: 'urgentTask',

    initialState: {
        createCardUrgent: [],
        
    },

    reducers: {
        valuesUrgentTask: (state, action) => {
            // const urgentValues = action.payload
            // state.createCardUrgent = action.payload
            const values = state.createCard
            state.createCardUrgent.push(values)
        }
    }
})

// Actions.
export const { valuesUrgentTask } = urgentTaskSlice.actions

// Selectors.
export const selectCreateCardurgent = (state) => state.urgentTask.createCardUrgent

export default urgentTaskSlice.reducer
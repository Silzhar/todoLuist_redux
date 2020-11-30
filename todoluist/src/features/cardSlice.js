import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',

    initialState: {
        createCard: false,
    },

    reducers: {
        newTask: (state) => {
            state.createCard = !state.createCard
        }
    }

})

// Actions.
export const { newTask } = cardSlice.actions

//Selectors.
export const selectCreateCard = (state) => state.createCard

export default cardSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',

    initialState: {
        createCard: [],
        card: {
            title: '',
            description: '',
        }
    },

    reducers: {
        createTask: (state, action) => {
            const { title, description } = state.card
            state.createCard.push({ title, description })

        },
    }

})

// Actions.
export const { createTask } = cardSlice.actions

//Selectors.
export const selectCreateCard = (state) => state.card.createCard
export const selectTitle = (state) => state.card.title
export const selectDescription = (state) => state.card.description


export default cardSlice.reducer
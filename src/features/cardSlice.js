import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',

    initialState: {
        createCard: [],
        task: {
            title: '',
            description: '',
        },
        drawCreateCard: false,
    },

    reducers: {
        createTask: (state, action) => {
            const { title, description } = state.task
            state.createCard.push({ title, description })
            // Reset states.
            state.task =  {
                title: '',
                description: '',
            }
            state.drawCreateCard = true
        },
        // I define the behaviour of each gearbox launched 
        // by an action and configure the new status.
        changeFormValue: (state, action) => {
            const { payload } = action
            const { name, value } = payload
      
            state.task[name] = value;
          },
      
    }

})

// Actions.
export const { createTask, changeFormValue } = cardSlice.actions

//Selectors.
export const selectCreateCard = (state) => state.card.createCard
export const selectTitle = (state) => state.card.task.title
export const selectDescription = (state) => state.card.task.description
export const selectDrawCreateCard = (state) => state.drawCreateCard


export default cardSlice.reducer
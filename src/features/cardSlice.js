import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',

  initialState: {
    createCard: [],
    createdUrgentCard: [],
    cardList: [],
    list: [],
    task: {
      title: '',
      description: '',
    },
    title: '',
    description: '',

    drawCreateCard: false,
  },

  reducers: {
    createTask: (state, action) => {
      const { title, description } = state.task;
      state.createCard.push(title, description);

      // Reset states.
      state.task = {
        title: '',
        description: '',
      };
      state.list.length = 0;
      state.drawCreateCard = true;
    },
    createUrgentTask: (state, action) => {
      const { title, description } = state.task;
      state.createdUrgentCard.push(title, description);

      // Reset states.
      state.task = {
        title: '',
        description: '',
      };
      state.list.length = 0;
      state.drawCreateCard = true;
    },
    // I define the behaviour of each gearbox launched
    // by an action and configure the new status.
    changeFormValue: (state, action) => {
      const { payload } = action;
      const { name, value } = payload;

      state.task[name] = value;
    },
  },
});

// Actions.
export const {
  createTask,
  createUrgentTask,
  changeFormValue,
} = cardSlice.actions;

//Selectors.
export const selectCreateCard = (state) => state.card.createCard;
export const selectCreatedUrgentCard = (state) => state.card.createdUrgentCard;
export const selectTitle = (state) => state.card.task.title;
export const selectDescription = (state) => state.card.task.description;
export const selectCardList = (state) => state.cardList;

export default cardSlice.reducer;

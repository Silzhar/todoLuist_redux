import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',

  initialState: {
    createCard: [],
    createdUrgentCard: [],
    remainingCard: [],
    eventsCard: [],
    notesCard: [],
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
      state.drawCreateCard = true;
    },
    createRemainingTask: (state, action) => {
      const { title, description } = state.task;
      state.remainingCard.push(title, description);

      // Reset states.
      state.task = {
        title: '',
        description: '',
      };
      state.drawCreateCard = true;
    },
    createNextEvents: (state, action) => {
      const { title, description } = state.task;
      state.eventsCard.push(title, description);

      // Reset states.
      state.task = {
        title: '',
        description: '',
      };
      state.drawCreateCard = true;
    },
    createNotes: (state, action) => {
      const { title, description } = state.task;
      state.notesCard.push(title, description);

      // Reset states.
      state.task = {
        title: '',
        description: '',
      };
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
  createRemainingTask,
  createNextEvents,
  createNotes,
  changeFormValue,
} = cardSlice.actions;

//Selectors.
export const selectCreateCard = (state) => state.card.createCard;
export const selectCreatedUrgentCard = (state) => state.card.createdUrgentCard;
export const selectCreatedRemainingCard = (state) => state.card.remainingCard;
export const selectCreatedeventsCard = (state) => state.card.eventsCard;
export const selectCreatedNotesCard = (state) => state.card.notesCard;


export const selectTitle = (state) => state.card.task.title;
export const selectDescription = (state) => state.card.task.description;

export default cardSlice.reducer;

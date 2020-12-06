import { configureStore } from '@reduxjs/toolkit'
import cardSlice from '../features/cardSlice'
import  urgentTaskSlice  from '../features/urgentTaskSlice'


export default configureStore({
  reducer: {
    card: cardSlice,
    urgentTask: urgentTaskSlice
  },
})

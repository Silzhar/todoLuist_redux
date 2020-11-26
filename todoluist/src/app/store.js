import { configureStore } from '@reduxjs/toolkit';
import { navbarSlice } from '../features/navbarSlice';

export default configureStore({
  reducer: {
    navbar: navbarSlice
  },
})

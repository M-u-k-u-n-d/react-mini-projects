// store.js
import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
 // ✅ Make sure the path is correct

const store = configureStore({
  reducer: {
    app1: appSlice, // ✅ Provide the reducer here
  },
});

export default store;

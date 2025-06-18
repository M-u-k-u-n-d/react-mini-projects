// store.js
import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import videoSlice from './videoSlice';
 // ✅ Make sure the path is correct

const store = configureStore({
  reducer: {
    app1: appSlice, // ✅ Provide the reducer here
    app2: searchSlice,
    app3: videoSlice
  },
});

export default store;

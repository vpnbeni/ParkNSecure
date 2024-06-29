// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../components/propertiesSlice';

const store = configureStore({
  reducer: {
    properties: propertiesReducer
  }
});

export default store;

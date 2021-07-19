import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from './cities-sclice';

export const store = configureStore({
  reducer: {
    city: citiesSlice.reducer
  }
});
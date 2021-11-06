import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from './cities-sclice';
import weatherSlice from './weather-slice'

export const store = configureStore({
  reducer: {
    city: citiesSlice.reducer,
    weather: weatherSlice.reducer
  }
});
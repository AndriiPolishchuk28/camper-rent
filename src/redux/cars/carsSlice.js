import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const initialState = {
  cars: [],
  favourites: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: (builder) =>
    builder.addCase(getAllCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
    }),
});

export const carsReducer = carsSlice.reducer;

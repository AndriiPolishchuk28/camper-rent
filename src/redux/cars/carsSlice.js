import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const initialState = {
  cars: [],
  favorites: [],
  page: 1,
  error: null,
  isLoading: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar(state, action) {
      state.favorites.push(action.payload);
    },
    deleteCar(state, action) {
      state.favorites = state.favorites.filter(
        (car) => car._id !== action.payload
      );
    },
    increasePage(state) {
      state.page = state.page + 1;
    },
    resetCars(state) {
      state.page = 1;
      state.cars = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (state.page === 1) {
          state.cars = payload;
        } else {
          state.cars.push(...payload);
        }
      })
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { addCar, deleteCar, increasePage, resetCars } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;

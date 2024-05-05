import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, PAGE_LIMIT } from '../../constants/constants';

axios.defaults.baseURL = BASE_URL;

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/adverts?limit=${PAGE_LIMIT}&page=${page}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

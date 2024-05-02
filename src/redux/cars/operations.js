import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://65b5763341db5efd2867b860.mockapi.io';
axios.defaults.baseURL = BASE_URL;

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

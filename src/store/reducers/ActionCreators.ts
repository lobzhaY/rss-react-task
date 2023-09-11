import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCard = createAsyncThunk('card/fetchAPI', async (idElem: string, thunkAPI) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_URL_API_GET_ONE}/${idElem}?client_id=${
        import.meta.env.VITE_AUTHORIZATION
      }`
    );
    return response.data;
  } catch (e) {
    const errors = [];
    if (axios.isAxiosError(e)) {
      errors.push(e.response?.data.errors[0]);
    }
    if (e instanceof Error) {
      errors.push(e.message);
    }
    return thunkAPI.rejectWithValue(errors);
  }
});

export const fetchAllCards = createAsyncThunk(
  'cards/fetchCards',
  async (searchValue: string, thunkAPI) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_URL_API_SEARCH}?query=${searchValue || 'photo'}&client_id=${
          import.meta.env.VITE_AUTHORIZATION
        }`
      );
      return res.data.results;
    } catch (e) {
      const errors = [];
      if (axios.isAxiosError(e)) {
        errors.push(e.response?.data.errors[0]);
      }
      if (e instanceof Error) {
        errors.push(e.message);
      }
      return thunkAPI.rejectWithValue(errors);
    }
  }
);

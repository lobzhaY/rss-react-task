import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTHORIZATION, URL_API_GET_ONE, URL_API_SEARCH } from '../../constants/constants';

export const fetchCard = createAsyncThunk('card/fetchAPI', async (idElem: string, thunkAPI) => {
  try {
    const response = await axios.get(`${URL_API_GET_ONE}/${idElem}?client_id=${AUTHORIZATION}`);
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
        `${URL_API_SEARCH}?query=${searchValue || 'photo'}&client_id=${AUTHORIZATION}`
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

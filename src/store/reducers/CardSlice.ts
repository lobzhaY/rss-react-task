import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchCard } from './ActionCreators';

import { IMainCardItem } from '../../interface/componentsInterface/cardItemInterface';
import { CardReduxState } from '../../interface/sliceInterface';

const initialState: CardReduxState = {
  card: null,
  errorState: [],
  isPending: false,
  isError: false,
};

/* eslint-disable no-param-reassign */
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCard.fulfilled.type]: (state, action: PayloadAction<IMainCardItem>) => {
      state.isPending = false;
      state.errorState = [];
      state.card = action.payload;
    },
    [fetchCard.pending.type]: (state) => {
      state.isPending = true;
      state.card = null;
      state.errorState = [];
      state.isError = false;
    },
    [fetchCard.rejected.type]: (state, action: PayloadAction<string[]>) => {
      state.isPending = false;
      state.isError = true;
      state.errorState = action.payload;
      state.card = null;
    },
  },
});

export default cardSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchAllCards } from './ActionCreators';

import { ICardStateMain } from '../../interface/componentsInterface/cardItemInterface';
import { IAllCardsState } from '../../interface/sliceInterface';

const initialState: IAllCardsState = {
  searchValue: '',
  cardsState: [],
  isError: false,
  errorState: [],
  isPending: true,
  isNotFound: false,
};

/* eslint-disable no-param-reassign */
const allCardsSlice = createSlice({
  name: 'allCards',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [fetchAllCards.fulfilled.type]: (state, action: PayloadAction<ICardStateMain[]>) => {
      state.isPending = false;
      state.errorState = [];
      state.isError = false;
      state.cardsState = action.payload;
      if (state.cardsState.length === 0) {
        state.isNotFound = true;
      } else {
        state.isNotFound = false;
      }
    },
    [fetchAllCards.pending.type]: (state) => {
      state.isPending = true;
      state.cardsState = [];
      state.errorState = [];
      state.isNotFound = false;
      state.isError = false;
    },
    [fetchAllCards.rejected.type]: (state, action: PayloadAction<string[]>) => {
      state.isPending = false;
      state.isError = true;
      state.errorState = action.payload;
      state.isNotFound = false;
      state.cardsState = [];
    },
  },
});

export const { setSearch } = allCardsSlice.actions;

export default allCardsSlice.reducer;

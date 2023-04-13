import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICardState } from '../../interface/formInterface';

interface FormReduxState {
  forms: ICardState[];
}

const initialState: FormReduxState = {
  forms: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    getAllCards(state, action: PayloadAction<ICardState>) {
      state.forms.push(action.payload);
    },
  },
});

export const { getAllCards } = formSlice.actions;

export default formSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const spinner = createSlice({
  name: 'spinner',
  initialState: {
    show: false,
  },
  reducers: {
    showSpinner: (state) => {
      state.show = true;
    },
    hideSpinner: (state) => {
      state.show = false;
    },
  },
});

export const { showSpinner, hideSpinner } = spinner.actions;

export const selecSpinner = (state) => state.spinner.show;

export default spinner.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const showToast = createAsyncThunk('toaster/showToaster', async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
});

export const toaster = createSlice({
  name: 'toaster',
  initialState: {
    show: false,
  },
  extraReducers: {
    [showToast.pending]: (state) => {
      state.show = true;
    },
    [showToast.fulfilled]: (state, action) => {
      state.show = false;
    },
  },
});

export const selecToaster = (state) => state.toaster.show;

export default toaster.reducer;

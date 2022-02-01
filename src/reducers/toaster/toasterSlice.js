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
    content: '...',
  },
  reducer: {
    setToastContent: (state, action) => {
      state.content = action;
    },
  },
  extraReducers: {
    [showToast.pending]: (state, action) => {
      state.content = action.meta.arg;
      state.show = true;
    },
    [showToast.fulfilled]: (state) => {
      state.show = false;
    },
  },
});

export const { setToastContent } = toaster.actions;

export const selecToastShow = (state) => state.toaster.show;
export const selecToastContent = (state) => state.toaster.content;

export default toaster.reducer;

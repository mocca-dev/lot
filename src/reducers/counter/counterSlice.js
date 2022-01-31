import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCounter = createAsyncThunk(
  'counter/fetchCounter',
  async (payload) => {
    return 44;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchCounter.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchCounter.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = 'success';
    },
    [fetchCounter.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selecCount = (state) => state.counter.value;

export default counterSlice.reducer;

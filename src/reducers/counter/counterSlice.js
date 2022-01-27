import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fecthCounter = createAsyncThunk(
  'counter/fecthCounter',
  async (payload) => {
    console.log(payload);
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
    [fecthCounter.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fecthCounter.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = 'success';
    },
    [fecthCounter.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selecCount = (state) => state.counter.value;

export default counterSlice.reducer;

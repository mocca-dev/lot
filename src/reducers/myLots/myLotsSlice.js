import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMyLots = createAsyncThunk('myLots/fetchMyLots', async () => {
  return fetch('/api/myLots').then((response) => response.json());
});

export const myLots = createSlice({
  name: 'myLots',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyLots.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchMyLots.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(fetchMyLots.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selecMyLots = (state) => state.myLots.list;
export const selecMyLotsIsFetching = (state) =>
  state.myLots.status === 'pending';

export default myLots.reducer;

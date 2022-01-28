import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fecthLot = createAsyncThunk('lot/fecthLot', async () =>
  fetch('api/lot/3').then((response) => response.json())
);

export const lot = createSlice({
  name: 'lot',
  initialState: {
    data: {},
    status: null,
  },
  extraReducers: {
    [fecthLot.pending]: (state) => {
      state.status = 'pending';
    },
    [fecthLot.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
    [fecthLot.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const selecLot = (state) => {
  return state.lot.data;
};
export const selecLotIsFetching = (state) => state.lot.status === 'pending';

export default lot.reducer;

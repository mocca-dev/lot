import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLot = createAsyncThunk('lot/fecthLot', async (id) =>
  fetch(`/api/lot/${id}`).then((response) => response.json())
);

export const createNewLot = createAsyncThunk('lot/newLot', async (data) => {
  const resp = await fetch('api/lots', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  return resp.lot;
});

export const lot = createSlice({
  name: 'lot',
  initialState: {
    data: {},
    status: null,
  },
  extraReducers: {
    [fetchLot.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchLot.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
    [fetchLot.rejected]: (state) => {
      state.status = 'failed';
    },
    [createNewLot.fulfilled]: (state, action) => {
      // console.log('fullfillsed', state, action);
    },
  },
});

export const selecLot = (state) => {
  return state.lot.data?.lot;
};
export const selecLotIsFetching = (state) => state.lot.status === 'pending';

export default lot.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { hideSpinner, showSpinner } from '../spinner/spinnerSlice';
import { showToast } from '../toaster/toasterSlice';

export const fetchLotById = createAsyncThunk('lot/fetchLot', async (id) =>
  fetch(`/api/lot/${id}`).then((response) => response.json())
);

export const createNewLot = createAsyncThunk(
  'lot/newLot',
  async (data, { dispatch }) => {
    dispatch(showSpinner());
    const resp = await fetch('api/lots', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      dispatch(hideSpinner());
      response.json();
    });
    return resp.lot;
  }
);

export const bookmarkLot = createAsyncThunk(
  'lot/bookmark',
  async (data, { dispatch }) => {
    const resp = await fetch(`/api/bookmark/${data.id}`, {
      method: 'PATCH',
    }).then(async (response) => {
      const resp = await response.json();
      dispatch(showToast(resp.lot.isBookmarked ? data.saved : data.unsaved));
      return;
    });
    return resp.lot;
  }
);

export const lot = createSlice({
  name: 'lot',
  initialState: {
    data: {},
    status: null,
  },
  reducers: {
    cleanLot: (state) => {
      state.data = {};
      state.status = null;
    },
  },
  extraReducers: {
    [fetchLotById.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchLotById.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
    [fetchLotById.rejected]: (state) => {
      state.status = 'failed';
    },
    [createNewLot.fulfilled]: (state, action) => {
      // console.log('fullfillsed', state, action);
    },
  },
});

export const { cleanLot } = lot.actions;

export const selecLot = (state) => {
  return state.lot.data?.lot;
};
export const selecLotIsFetching = (state) => state.lot.status === 'pending';

export default lot.reducer;

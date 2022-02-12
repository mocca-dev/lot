import { createSlice } from '@reduxjs/toolkit';

export const subHeaderSlice = createSlice({
  name: 'subHeader',
  initialState: {
    value: '',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = subHeaderSlice.actions;
export const selecSubHeader = (state) => state.subHeader.value;

export default subHeaderSlice.reducer;

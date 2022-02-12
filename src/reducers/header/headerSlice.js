import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    content: null,
  },
  reducers: {
    setHeaderContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setHeaderContent } = headerSlice.actions;
export const selecHeader = (state) => state.header.content;

export default headerSlice.reducer;

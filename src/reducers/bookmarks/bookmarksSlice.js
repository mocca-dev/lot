import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fecthBookmarks = createAsyncThunk(
  'bookmarks/fecthBookmarks',
  async () => {
    return fetch('api/bookmarkedlots').then((response) => response.json());
  }
);

export const bookmarks = createSlice({
  name: 'bookmarks',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [fecthBookmarks.pending]: (state) => {
      state.status = 'pending';
    },
    [fecthBookmarks.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [fecthBookmarks.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const selecBookmarks = (state) => state.bookmarks.list;
export const selecBookmarksIsFetching = (state) =>
  state.bookmarks.status === 'pending';

export default bookmarks.reducer;

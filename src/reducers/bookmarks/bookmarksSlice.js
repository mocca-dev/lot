import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBookmarks = createAsyncThunk(
  'bookmarks/fetchBookmarks',
  async () => {
    return fetch('api/bookmarkedlots').then((response) => response.json());
  }
);

export const fetchBookmarksByTitle = createAsyncThunk(
  'bookmarks/fetchBookmarksByTitle',
  async (title) =>
    fetch(`/api/bookmarkedlots/${title}`).then((response) => response.json())
);

export const bookmarks = createSlice({
  name: 'bookmarks',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [fetchBookmarks.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchBookmarks.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [fetchBookmarks.rejected]: (state) => {
      state.status = 'failed';
    },
    [fetchBookmarksByTitle.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchBookmarksByTitle.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [fetchBookmarksByTitle.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const selecBookmarks = (state) => state.bookmarks.list;
export const selecBookmarksIsFetching = (state) =>
  state.bookmarks.status === 'pending';

export default bookmarks.reducer;

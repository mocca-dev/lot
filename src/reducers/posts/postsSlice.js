import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return fetch('api/parkinglots').then((response) => response.json());
});

export const fetchPostsByTitle = createAsyncThunk(
  'posts/fetchPostsByTitle',
  async (title) =>
    fetch(`/api/parkinglots/${title}`).then((response) => response.json())
);

export const posts = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [fetchPosts.rejected]: (state) => {
      state.status = 'failed';
    },
    [fetchPostsByTitle.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchPostsByTitle.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [fetchPostsByTitle.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const selecPosts = (state) => state.posts.list;
export const selecPostsIsFetching = (state) => state.posts.status === 'pending';

export default posts.reducer;

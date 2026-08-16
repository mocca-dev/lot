import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return fetch('api/lots').then((response) => response.json());
});

export const fetchPostsByTitle = createAsyncThunk(
  'posts/fetchPostsByTitle',
  async (title) =>
    fetch(`/api/lots/${title}`).then((response) => response.json())
);

export const posts = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchPostsByTitle.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPostsByTitle.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPostsByTitle.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selecPosts = (state) => state.posts.list;
export const selecPostsIsFetching = (state) => state.posts.status === 'pending';

export default posts.reducer;

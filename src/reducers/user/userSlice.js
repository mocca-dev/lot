import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signIn = createAsyncThunk('user/setUser', async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: false,
  },
  reducers: {
    signOut: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.status = true;
    },
    [signIn.fulfilled]: (state, action) => {
      console.log('fullfilled', action.meta.arg);
      state.data = action.meta.arg;
      state.status = false;
    },
  },
});

export const { signOut } = userSlice.actions;
export const selecUser = (state) => state.user.data;
export const selecUserStatus = (state) => state.user.status;

export default userSlice.reducer;

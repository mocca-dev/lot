import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { hideSpinner } from '../spinner/spinnerSlice';
import { showSpinner } from '../spinner/spinnerSlice';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    return fetch('/api/notifications').then((response) => response.json());
  }
);

export const createNewNotification = createAsyncThunk(
  'lot/newNotification',
  async (data, { dispatch }) => {
    dispatch(showSpinner());
    const resp = await fetch('/api/notifications', {
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
    return resp.notification;
  }
);

export const notifications = createSlice({
  name: 'notifications',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [fetchNotifications.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchNotifications.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [fetchNotifications.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const selecNotifications = (state) => state.notifications.list;
export const selecNotificationsIsFetching = (state) =>
  state.notifications.status === 'pending';

export default notifications.reducer;

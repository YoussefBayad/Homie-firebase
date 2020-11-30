import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';

const initialState = {
  data: [],
  loading: false,
  error: undefined,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications'
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    deleteNotification(state, action) {
      if (!action.payload) return;
      state.data = state.data.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchNotifications.pending]: (state, action) => {},
    [fetchNotifications.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.data.push(action.payload);
    },
  },
});
export const { deleteNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';
import avatar from '../assets/icon/unknownUser.jpg';

const initialState = {
  data: [
    {
      createdAt: new Date().toISOString(),
      recipient: 1,
      sender: 2,
      senderName: 'rihana',
      senderPhotoURL: avatar,
      type: 'comment',
      read: false,
      postId: 2,
      id: 2,
    },
    {
      createdAt: new Date().toISOString(),
      recipient: 1,
      sender: 2,
      senderName: 'Kawtar',
      senderPhotoURL: avatar,
      type: 'like',
      read: false,
      postId: 3,
      id: 1,
    },
  ],
  loading: false,
  error: undefined,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications'
);

export const markNotificationsRead = createAsyncThunk(
  'notifications/markNotificationsRead',
  async (nots) => {
    await nots.forEach((notId) => {
      db.doc(`/notifications/${notId}`).update({ read: true });
    });
  }
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

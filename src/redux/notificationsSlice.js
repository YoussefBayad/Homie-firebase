import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';
import avatar from '../assets/icon/unknownUser.jpg';

const initialState = {
  data: [],
  loading: false,
  error: undefined,
};

// {
//   createdAt: new Date().toISOString(),
//   recipient: 1,
//   sender: 2,
//   senderName: 'rihana',
//   senderPhotoURL: avatar,
//   type: 'comment',
//   read: false,
//   postId: 2,
//   id: 2,
// },
// {
//   createdAt: new Date().toISOString(),
//   recipient: 1,
//   sender: 2,
//   senderName: 'Kawtar',
//   senderPhotoURL: avatar,
//   type: 'like',
//   read: false,
//   postId: 3,
//   id: 1,
// },

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
      state.data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },
    [markNotificationsRead.fulfilled]: (state, action) => {
      if (!action.payload) return;

      state.data = state.data.map((not) => {
        if (not.id === action.payload.id) not = action.payload;
        return not;
      });
    },
  },
});
export const { deleteNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;

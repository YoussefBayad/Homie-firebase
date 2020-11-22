import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import avatar from '../assets/icon/unknownUser.jpg';
import { db } from '../Firebase/utils';
const initialState = {
  user: {
    displayName: 'joseph bayad',
    photoURL: avatar,
    bio: '',
    id: 1,
    postsCount: 27,
    followersCount: '2.5k',
    followingCount: 86,
  },
  loading: false,
  error: undefined,
};
// {
//   displayName: 'joseph bayad',
//   photoURL: avatar,
//   bio: 'I will make it',
//   id: 1,
//   postsCount: 27,
//   followersCount: '2.5k',
//   followingCount: 86,
// }

export const editUserInfo = createAsyncThunk(
  'user/editUserInfo',
  async (newUserInfo) => {
    try {
      await db.collection('users').doc(newUserInfo.id).update(newUserInfo);
    } catch (error) {
      console.error(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authChange(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: {
    [editUserInfo.pending]: (state, action) => {},
    [editUserInfo.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.user = action.payload;
    },
    [editUserInfo.rejected]: (state, action) => {},
  },
});

export const { authChange } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import avatar from '../assets/icon/me.jpg';
const initialState = {
  user: {
    displayName: 'joseph bayad',
    photoURL: avatar,
    bio: 'I will make it',
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
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { authChange } = userSlice.actions;

export default userSlice.reducer;

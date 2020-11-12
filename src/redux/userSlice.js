import { createSlice } from '@reduxjs/toolkit';
import avatar from '../assets/icon/me.jpg';

const initialState = {
  user: {
    displayName: 'joseph bayad',
    photoURL: avatar,
    bio: 'I will make it',
    id: 1,
  },
  loading: false,
  error: undefined,
};
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

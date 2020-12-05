import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';
import avatar from '../assets/icon/unknownUser.jpg';

const initialState = {
  data: [
    {
      displayName: 'joseph bayad',
      photoURL: avatar,
      bio: 'I will make it',
      id: 1,
      postsCount: 27,
      followersCount: '2.5k',
      followingCount: 86,
    },
    {
      displayName: 'rami malek',
      photoURL: avatar,
      bio: 'feeling good',
      id: 2,
      postsCount: 27,
      followersCount: '2.5k',
      followingCount: 86,
    },
    {
      displayName: 'ronaldo',
      photoURL: avatar,
      bio: 'dedication and education',
      id: 5,
      postsCount: 27,
      followersCount: '2.5k',
      followingCount: 86,
    },
  ],
  loading: false,
  error: undefined,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const collection = await db.collection('users').get();

  let users = [];

  for (const doc of collection.docs) {
    users.push({ ...doc.data(), id: doc.id });
  }

  return users;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {},
    [fetchUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      return (state.error = 'something went wrong');
    },
  },
});

export default usersSlice.reducer;

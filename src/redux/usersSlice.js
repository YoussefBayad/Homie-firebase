import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';

const initialState = {
  data: [],
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

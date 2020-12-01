import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';

const initialState = {
  data: [],
  loading: false,
  error: undefined,
};

export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (message) => {
    try {
      await db.collection('messages').add(message);
    } catch (error) {
      console.error(error.message);
    }
  }
);

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: {
    [addMessage.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.data.push(action.payload);
    },
  },
});

export default likesSlice.reducer;

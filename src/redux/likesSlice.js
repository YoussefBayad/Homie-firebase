import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const fetchLikes = createAsyncThunk('likes/fetchLike');

export const like = createAsyncThunk('likes/likePost', async (like) => {
  try {
    var response = await db.collection('likes').add(like);
  } catch (error) {
    console.error(error.message);
  }
  return response;
});

export const unlike = createAsyncThunk('likes/unlike', async (id) => {
  try {
    var response = await db.collection('likes').doc(id).delete();
  } catch (error) {
    console.error(error.message);
  }
  return response;
});

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLikes.pending]: (state, action) => {
      return action.payload;
    },
    [fetchLikes.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchLikes.rejected]: (state, action) => {
      return action.payload;
    },
  },
});

export default likesSlice.reducer;

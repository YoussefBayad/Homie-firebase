import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';

const initialState = {
  data: [],
  loading: false,
  error: undefined,
};

export const fetchLikes = createAsyncThunk(
  'likes/fetchLikes'
  // async ({ postId }) => {
  //   const query = db
  //     .collection('comments')
  //     .where('postId', '==', postId)
  //     .orderBy('createdAt', 'asc');
  //   const [data, loading, error] = useCollectionDataOnce(query, {
  //     idField: 'id',
  //   });
  //   if (data) return data;
  // }
);

export const like = createAsyncThunk('likes/like', async (like) => {
  try {
    const response = await db.collection('likes').add(like);
  } catch (error) {
    console.error(error.message);
  }
});

export const unlike = createAsyncThunk('likes/unlike', async (id) => {
  try {
    const response = await db.collection('likes').doc(id).delete();
  } catch (error) {
    console.error(error.message);
  }
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
    [like.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.data.push(action.payload);
    },
    [unlike.fulfilled]: (state, action) => {
      console.log('inside reducer', action.payload);
      state.data = state.data.filter((like) => like.id !== action.payload);
    },
  },
});

export default likesSlice.reducer;

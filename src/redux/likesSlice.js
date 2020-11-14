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

export const like = createAsyncThunk('likes/likePost', async (like) => {
  try {
    var response = await db.collection('likes').add(like);
  } catch (error) {
    console.error(error.message);
  }
  return response;
});

export const unlike = createAsyncThunk('likes/unlike', async (id) => {
  console.log('dispatched', id);
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
      console.log('pendig');
    },
    [fetchLikes.fulfilled]: (state, action) => {
      return action.payload;
      console.log('fufu');
    },
    [fetchLikes.rejected]: (state, action) => {
      return action.payload;
      console.log('reje');
    },
  },
});

export default likesSlice.reducer;

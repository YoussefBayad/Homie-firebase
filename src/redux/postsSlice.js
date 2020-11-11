import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const postsRef = db.collection('posts');
  const postsCollection = await postsRef.orderBy('createdAt', 'desc').get();
  const posts = postsCollection.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return posts;
});

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const response = await db.collection('posts').add(post);

  return response;
});
export const editPost = createAsyncThunk('posts/editPost', async (newPost) => {
  const response = await db.collection('posts').doc(newPost.id).update(newPost);

  return response;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  const response = await db.collection('posts').doc(id).delete();

  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    latest(state) {
      state.data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },
    lowest(state) {
      state.data.sort((a, b) => (a.likesCount > b.likesCount ? 1 : -1));
    },
    highest(state) {
      state.data.sort((a, b) => (a.likesCount < b.likesCount ? 1 : -1));
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state = action.payload;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      const data = action.payload.posts.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      state = {
        data,
        error: action.payload.error,
        loading: action.payload.loading,
      };
    },
    [fetchPosts.rejected]: (state, action) => {
      state = action.payload;
    },
    [addPost.pending]: (state, action) => {},
    [addPost.fulfilled]: (state, action) => {},

    [addPost.rejected]: (state, action) => {},
    [deletePost.pending]: (state, action) => {},
    [deletePost.fulfilled]: (state, action) => {},
    [deletePost.rejected]: (state, action) => {},
    [editPost.pending]: (state, action) => {},
    [editPost.fulfilled]: (state, action) => {},
    [editPost.rejected]: (state, action) => {},
  },
});

export const { latest, lowest, highest } = postsSlice.actions;

export default postsSlice.reducer;

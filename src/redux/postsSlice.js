import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';
import avatar from '../assets/icon/me.jpg';

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
};

// [
//   {
//     id: 1,
//     user: {
//       photoURL: avatar,
//       id: 1,
//       displayName: 'Joseph Bayad',
//     },
//     content: 'you will make it',
//     createdAt: new Date().toLocaleString,
//   },
// ]
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  // const postsRef = db.collection('posts');
  // const postsCollection = await postsRef.orderBy('createdAt', 'desc').get();
  // const posts = postsCollection.map((doc) => ({
  //   ...doc.data(),
  //   id: doc.id,
  // }));
  // return posts;
});

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  try {
    var response = await db.collection('posts').add(post);
  } catch (error) {
    console.error(error.message);
  }
  return response;
});
export const editPost = createAsyncThunk('posts/editPost', async (newPost) => {
  try {
    var response = await db.collection('posts').doc(newPost.id).update(newPost);
  } catch (error) {
    console.error(error.message);
  }
  return response;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  try {
    var response = await db.collection('posts').doc(id).delete();
  } catch (error) {
    console.error(error.message);
  }
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // latest(state) {
    //   state.data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    // },
    lowest(state) {
      state.data.sort((a, b) => (a.likesCount > b.likesCount ? 1 : -1));
    },
    highest(state) {
      state.data.sort((a, b) => (a.likesCount < b.likesCount ? 1 : -1));
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      const loading = action.payload;
      state.loading = loading;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      const error = action.payload;
      state.error = error;
    },
    // [addPost.pending]: (state, action) => {},
    // [addPost.fulfilled]: (state, action) => {},

    // [addPost.rejected]: (state, action) => {},
    // [deletePost.pending]: (state, action) => {},
    // [deletePost.fulfilled]: (state, action) => {},
    // [deletePost.rejected]: (state, action) => {},
    // [editPost.pending]: (state, action) => {},
    // [editPost.fulfilled]: (state, action) => {},
    // [editPost.rejected]: (state, action) => {},
  },
});

export const { latest, lowest, highest } = postsSlice.actions;

export default postsSlice.reducer;

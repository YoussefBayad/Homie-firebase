import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';
import avatar from '../assets/icon/unknownUser.jpg';
const initialState = {
  data: [
    {
      id: 1,
      user: {
        photoURL: avatar,
        id: 1,
        displayName: 'Joseph Bayad',
      },
      content: 'you will make it',
      createdAt: new Date().toISOString(),
      likesCount: 10,
      commentsCount: 10,
      sharesCount: 10,
    },
    {
      id: 12,
      user: {
        photoURL: avatar,
        id: 3,
        displayName: 'Joseph Bayad',
      },
      content: "what 's up bro'",
      createdAt: new Date().toISOString(),
      likesCount: 10,
      commentsCount: 10,
      sharesCount: 10,
    },
    {
      id: 5,
      user: {
        photoURL: avatar,
        id: 1,
        displayName: 'Joseph Bayad',
      },
      content: 'heyyy every body',
      createdAt: new Date().toISOString(),
      likesCount: 10,
      commentsCount: 10,
      sharesCount: 10,
    },
  ],
  loading: false,
  error: undefined,
};

// [
// {
//   id: 1,
//   user: {
//     photoURL: avatar,
//     id: 1,
//     displayName: 'Joseph Bayad',
//   },
//   content: 'you will make it',
//   createdAt: new Date().toISOString(),
// },
// ]

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { dispatch, getState }) => {
    try {
      var data = [];
      const query = db.collection('posts').orderBy('createdAt', 'desc');

      const collection = await query.get();
      for (const doc of collection.docs) {
        data.push({ ...doc.data(), id: doc.id });
      }
    } catch (err) {
      dispatch({ type: 'posts/fetchPosts/rejected', payload: err });
    }
    return data;
  }
);

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  await db
    .collection('posts')
    .add(post)
    .catch((err) => console.error(err));
});
export const editPost = createAsyncThunk('posts/editPost', async (newPost) => {
  try {
    var response = await db.collection('posts').doc(newPost.id).update(newPost);
  } catch (error) {
    console.error(error.message);
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  try {
    var response = await db.collection('posts').doc(id).delete();
  } catch (error) {
    console.error('deletePost', error.message);
  }
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
      return state;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      return { data: action.payload || [], loading: false, error: undefined };
    },
    [fetchPosts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addPost.pending]: (state, action) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      if (!action.payload) return;

      state.loading = false;
      state.data.push(action.payload);
      state.data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },

    // [addPost.rejected]: (state, action) => {},
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      if (!action.payload) return;

      state.loading = false;
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
    // [deletePost.rejected]: (state, action) => {},
    // [editPost.pending]: (state, action) => {

    // },
    [editPost.fulfilled]: (state, action) => {
      if (!action.payload) return;

      state.data = state.data.map((post) => {
        if (post.id === action.payload.id) post = action.payload;
        return post;
      });
    },
    // [editPost.rejected]: (state, action) => {},
  },
});

export const { latest, lowest, highest } = postsSlice.actions;

export default postsSlice.reducer;

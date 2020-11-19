import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';

const initialState = {
  data: [],
  loading: false,
  error: undefined,
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments'
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

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (comment) => {
    try {
      var response = await db.collection('comments').add(comment);
    } catch (error) {
      console.error(error.message);
    }
  }
);
export const editComment = createAsyncThunk(
  'comments/editComment',
  async (newComment) => {
    try {
      var response = await db
        .collection('comments')
        .doc(newComment.id)
        .update(newComment);
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (id) => {
    try {
      var response = await db.collection('comments').doc(id).delete();
    } catch (error) {
      console.error(error.message);
    }
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      return action.payload;
    },
    [fetchComments.fulfilled]: (state, action) => {
      action.payload.data = action.payload.data
        .slice()
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

      return action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      return action.payload;
    },
    [addComment.pending]: (state, action) => {},
    [addComment.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.data.push(action.payload);
    },
    // [addComment.rejected]: (state, action) => {},
    // [deleteComment.pending]: (state, action) => {},
    [deleteComment.fulfilled]: (state, action) => {
      if (!action.payload) return;

      state.data = state.data.filter(
        (comment) => comment.id !== action.payload
      );
    },
    // [deleteComment.rejected]: (state, action) => {},
    // [editComment.pending]: (state, action) => {},
    [editComment.fulfilled]: (state, action) => {
      if (!action.payload) return;

      state.data = state.data.map((post) => {
        if (post.id === action.payload.id) post = action.payload;
        return post;
      });
    },
    // [editComment.rejected]: (state, action) => {},
  },
});

export const { latest, lowest, highest } = commentsSlice.actions;

export default commentsSlice.reducer;

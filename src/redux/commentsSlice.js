import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments'
  // async ({ postId }) => {
  //   console.log('fetchng comments');
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
    return response;
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
    return response;
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
    return response;
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
      return action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      return action.payload;
    },
    // [addComment.pending]: (state, action) => {},
    // [addComment.fulfilled]: (state, action) => {},
    // [addComment.rejected]: (state, action) => {},
    // [deleteComment.pending]: (state, action) => {},
    // [deleteComment.fulfilled]: (state, action) => {},
    // [deleteComment.rejected]: (state, action) => {},
    // [editComment.pending]: (state, action) => {},
    // [editComment.fulfilled]: (state, action) => {},
    // [editComment.rejected]: (state, action) => {},
  },
});

export const { latest, lowest, highest } = commentsSlice.actions;

export default commentsSlice.reducer;

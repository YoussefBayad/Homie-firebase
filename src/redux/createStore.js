import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';

export default configureStore({
  reducer: {
    auth: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});

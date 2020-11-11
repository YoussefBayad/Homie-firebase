import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postsReducer from './postsSlice';

export default configureStore({
  reducer: {
    auth: userReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

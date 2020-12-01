import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';
import likesReducer from './likesSlice';
import notificationsReducer from './notificationsSlice';
import messagesReducer from './messagesSlice';

export default configureStore({
  reducer: {
    auth: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer,
    notifications: notificationsReducer,
    messages: messagesReducer,
  },
});

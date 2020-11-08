import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';

export default configureStore({
  reducer: {
    currentUser: userReducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayName: 'joseph',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { authChange } = userSlice.actions;

export default userSlice.reducer;

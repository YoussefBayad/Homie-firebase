import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/utils';
import avatar from '../assets/icon/unknownUser.jpg';

const initialState = {
  data: [
    {
      createdAt: new Date().toISOString(),
      receiver: 1,
      sender: {
        displayName: 'joseph',
        id: 5,
        photoURL: avatar,
      },
      content: 'hiii',
      id: 1,
    },
    {
      createdAt: new Date().toISOString(),
      receiver: 1,
      sender: {
        displayName: 'joseph',
        id: 5,
        photoURL: avatar,
      },
      content: 'message content',
      id: 1,
    },
    {
      createdAt: new Date().toISOString(),
      receiver: 4,
      sender: {
        displayName: 'joseph',
        id: 1,
        photoURL: avatar,
      },
      content: 'hello',
      id: 1,
    },
    {
      createdAt: new Date().toISOString(),
      receiver: 4,
      sender: {
        displayName: 'joseph',
        id: 1,
        photoURL: avatar,
      },
      content: 'hello',
      id: 1,
    },
    {
      createdAt: new Date().toISOString(),
      receiver: 4,
      sender: {
        displayName: 'joseph',
        id: 1,
        photoURL: avatar,
      },
      content: 'hello',
      id: 1,
    },
    {
      createdAt: new Date().toISOString(),
      receiver: 4,
      sender: {
        displayName: 'joseph',
        id: 1,
        photoURL: avatar,
      },
      content: 'hello',
      id: 1,
    },
  ],
  loading: false,
  error: undefined,
};

// {
//   createdAt: new Date().toISOString(),
//   receiver: id,
//   sender: {
//          displayName: 'joseph",
//          id:id,
//          photoURL:url
//          },
//  content:'message content'
//   id: 1,
// },

export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (message) => {
    try {
      await db.collection('messages').add(message);
    } catch (error) {
      console.error(error.message);
    }
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: {
    [addMessage.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.data.push(action.payload);
      state.data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },
  },
});

export default messagesSlice.reducer;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import App from './App';
import { fetchPosts } from './redux/postsSlice';
import { db } from './Firebase/utils';

// store.dispatch(fetchPosts());

db.collection('posts').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      store.dispatch({
        type: 'posts/addPost/fulfilled',
        payload: { ...change.doc.data(), id: change.doc.id },
      });
      console.log('added', { ...change.doc.data(), id: change.doc.id });
    }
    if (change.type === 'modified') {
      store.dispatch({
        type: 'posts/editPost/fulfilled',
        payload: { content: change.doc.data().content, id: change.doc.id },
      });
      console.log('edited', change.doc.data().content, change.doc.id);
    }
    if (change.type === 'removed') {
      store.dispatch({
        type: 'posts/deletePost/fulfilled',
        payload: change.doc.id,
      });
      console.log('removed', { ...change.doc.data(), id: change.doc.id });
    }
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

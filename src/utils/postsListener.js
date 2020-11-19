import { db } from '../Firebase/utils';
import store from '../redux/createStore';

const postsListener = () => {
  const unsubscribe = db.collection('posts').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const state = store.getState();
      const post = state.posts.data.find((post) => post.id === change.doc.id);
      if (change.type === 'added' && !post) {
        store.dispatch({
          type: 'posts/addPost/fulfilled',
          payload: { ...change.doc.data(), id: change.doc.id },
        });
        console.log('added', { ...change.doc.data(), id: change.doc.id });
      }
      if (change.type === 'modified') {
        store.dispatch({
          type: 'posts/editPost/fulfilled',
          payload: { ...change.doc.data(), id: change.doc.id },
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
  return unsubscribe;
};

export default postsListener;

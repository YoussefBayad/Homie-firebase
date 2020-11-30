import { db } from '../Firebase/utils';
import store from '../redux/createStore';

const postsListener = () => {
  const unsubscribe = db
    .collection('posts')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const state = store.getState();
        const post = state.posts.data.find((post) => post.id === change.doc.id);

        if (change.type === 'added' && !post) {
          store.dispatch({
            type: 'posts/addPost/fulfilled',
            payload: { ...change.doc.data(), id: change.doc.id },
          });
          // console.log('added', { ...change.doc.data(), id: change.doc.id });
        }

        if (change.type === 'modified') {
          store.dispatch({
            type: 'posts/editPost/fulfilled',
            payload: { ...change.doc.data(), id: change.doc.id },
          });
          // console.log('edited', change.doc.data().content, change.doc.id);
        }

        if (change.type === 'removed') {
          store.dispatch({
            type: 'posts/deletePost/fulfilled',
            payload: change.doc.id,
          });
          db.collection('comments')
            .where('postId', '==', change.doc.id)
            .get()
            .then((data) => {
              data.forEach((doc) => {
                db.doc(`/comments/${doc.id}`).delete();
              });
              return db
                .collection('likes')
                .where('postId', '==', change.doc.id)
                .get();
            })
            .then((data) => {
              data.forEach((doc) => {
                db.doc(`/likes/${doc.id}`).delete();
              });
              return db
                .collection('notifications')
                .where('postId', '==', change.doc.id)
                .get();
            })
            .then((data) => {
              data.forEach((doc) => {
                db.doc(`/notifications/${doc.id}`).delete();
              });
            });
        }
      });
    });
  return unsubscribe;
};

export default postsListener;

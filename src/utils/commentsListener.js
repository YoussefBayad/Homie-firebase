import { db } from '../Firebase/utils';
import store from '../redux/createStore';

const commentsListener = (postId) => {
  const unsubscribe = db
    .collection('comments')
    .orderBy('createdAt', 'asc')
    // .where('postId', '==', postId)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const state = store.getState();
        const comment = state.comments.data.find(
          (comment) => comment.id === change.doc.id
        );
        if (change.type === 'added' && !comment) {
          store.dispatch({
            type: 'comments/addComment/fulfilled',
            payload: { ...change.doc.data(), id: change.doc.id },
          });
          console.log('added', { ...change.doc.data(), id: change.doc.id });
        }
        if (change.type === 'modified') {
          store.dispatch({
            type: 'comments/editComment/fulfilled',
            payload: { ...change.doc.data(), id: change.doc.id },
          });
          console.log('edited', change.doc.data().content, change.doc.id);
        }
        if (change.type === 'removed') {
          store.dispatch({
            type: 'comments/deleteComment/fulfilled',
            payload: change.doc.id,
          });
          console.log('removed', change.doc.id);
        }
      });
    });
  return unsubscribe;
};

export default commentsListener;

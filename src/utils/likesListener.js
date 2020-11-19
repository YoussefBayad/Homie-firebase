import { db } from '../Firebase/utils';
import store from '../redux/createStore';

const likesListener = (userId) => {
  const unsubscribe = db
    .collection('likes')
    .where('userId', '==', userId)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const state = store.getState();
        const like = state.likes.data.find((like) => like.id === change.doc.id);
        if (change.type === 'added' && !like) {
          store.dispatch({
            type: 'likes/like/fulfilled',
            payload: { ...change.doc.data(), id: change.doc.id },
          });
          console.log('added', { ...change.doc.data(), id: change.doc.id });
        }
        //   if (change.type === 'modified') {
        //     store.dispatch({
        //       type: 'likes/editLike/fulfilled',
        //       payload: { ...change.doc.data(), id: change.doc.id },
        //     });
        //     console.log('edited', change.doc.data().content, change.doc.id);
        //   }
        if (change.type === 'removed') {
          store.dispatch({
            type: 'likes/unlike/fulfilled',
            payload: change.doc.id,
          });
          console.log('removed', change.doc.id);
        }
      });
    });
  return unsubscribe;
};

export default likesListener;

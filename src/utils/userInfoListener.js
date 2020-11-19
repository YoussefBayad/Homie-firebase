import { db } from '../Firebase/utils';
import store from '../redux/createStore';

const userInfoListener = (userId) => {
  const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'modified') {
        store.dispatch({
          type: 'user/editUserInfo/fulfilled',
          payload: { ...change.doc.data(), id: change.doc.id },
        });
        console.log('edited', change.doc.data().content, change.doc.id);
      }
      if (change.type === 'removed') {
        store.dispatch({
          type: 'posts/deleteUserAccount/fulfilled',
          payload: change.doc.id,
        });
        console.log('removed', { ...change.doc.data(), id: change.doc.id });
      }
    });
  });
  return unsubscribe;
};

export default userInfoListener;

import { db } from '../Firebase/utils';
import store from '../redux/createStore';

const likesListener = (userId, userName, photoURL) => {
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
          db.doc(`/posts/${change.doc.data().postId}`)
            .get()
            .then((doc) => {
              if (
                doc.exists &&
                doc.data().user.id !== change.doc.data().userId
              ) {
                return db.doc(`/notifications/${change.doc.id}`).set({
                  createdAt: new Date().toISOString(),
                  recipient: doc.data().user.id,
                  sender: change.doc.data().userId,
                  senderName: userName,
                  senderPhotoURL: photoURL,
                  type: 'like',
                  read: false,
                  screamId: doc.id,
                });
              }
            })
            .catch((err) => console.error(err));

          console.log('added', { ...change.doc.data(), id: change.doc.id });
        }

        if (change.type === 'removed') {
          store.dispatch({
            type: 'likes/unlike/fulfilled',
            payload: change.doc.id,
          });
          db.doc(`/notifications/${change.doc.id}`)
            .delete()
            .catch((err) => console.error(err));
          console.log('removed', change.doc.id);
        }
      });
    });
  return unsubscribe;
};

export default likesListener;

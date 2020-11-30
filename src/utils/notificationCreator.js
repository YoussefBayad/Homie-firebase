import { db, functions } from '../Firebase/utils';

const notificationCreator = () => {
  // on like create
  functions.firestore.document('likes/{id}').onCreate((snapshot) => {
    return db
      .doc(`/posts/${snapshot.data().postId}`)
      .get()
      .then((doc) => {
        if (doc.exists && doc.data().user.id !== snapshot.data().userId) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().user.id,
            sender: snapshot.data().userId,
            type: 'like',
            read: false,
            screamId: doc.id,
          });
        }
      })
      .catch((err) => console.error(err));
  });
  // on like deleted

  functions.firestore.document('likes/{id}').onDelete((snapshot) => {
    return db
      .doc(`/notifications/${snapshot.id}`)
      .delete()
      .catch((err) => console.error(err));
  });

  // on comment created
  functions.firestore.document('comments/{id}').onCreate((snapshot) => {
    return db
      .doc(`/posts/${snapshot.data().postId}`)
      .get()
      .then((doc) => {
        if (doc.exists && doc.data().user.id !== snapshot.data().userId) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().user.id,
            sender: snapshot.data().userId,
            type: 'comment',
            read: false,
            screamId: doc.id,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        return;
      });
  });

  //on comment deleted
  functions.firestore.document('comments/{id}').onDelete((snapshot) => {
    return db
      .doc(`/notifications/${snapshot.id}`)
      .delete()
      .catch((err) => console.error(err));
  });
};

export default notificationCreator;

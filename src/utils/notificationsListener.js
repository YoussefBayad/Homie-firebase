import { db } from '../Firebase/utils';
import store from '../redux/createStore';
import { deleteNotification } from '../redux/notificationsSlice';

const NotificationListener = (userId) => {
  console.log('notifications Listener');
  const unsubscribe = db
    .collection('notifications')
    .where('recipient', '==', userId)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const state = store.getState();
        const not = state.notifications.data.find(
          (not) => not.id === change.doc.id
        );

        if (change.type === 'added' && !not) {
          store.dispatch({
            type: 'notifications/fetchNotifications/fulfilled',
            payload: { ...change.doc.data(), id: change.doc.id },
          });
          console.log('added', { ...change.doc.data(), id: change.doc.id });
        }

        if (change.type === 'removed') {
          store.dispatch(deleteNotification(change.doc.id));
          console.log('removed', change.doc.id);
        }
      });
    });
  return unsubscribe;
};

export default NotificationListener;

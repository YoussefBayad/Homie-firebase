import { db } from '../Firebase/utils';
import store from '../redux/createStore';

const messagesListener = (sender) => {
  const unsubscribe = db.collection('messages').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const state = store.getState();
      const message = state.messages.data.find(
        (message) => message.id === change.doc.id
      );
      if (change.type === 'added' && !message) {
        store.dispatch({
          type: 'messages/addMessage/fulfilled',
          payload: { ...change.doc.data(), id: change.doc.id },
        });
      }
    });
  });
  return unsubscribe;
};

export default messagesListener;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import messagesListener from '../../utils/messagesListener';
import ErrorText from '../../components/ErrorText';
import Spinner from '../../components/Spinner';
import Messages from './Messages';
import AddMessage from './AddMessage';

//style
import './style.scss';

const ChatBody = ({ sender, receiver }) => {
  const { data, loading, error } = useSelector((state) => state.messages);
  const messages = data
    .filter((msg) => msg.receiver === sender || msg.sender === sender)
    .filter((msg) => msg.sender === receiver || msg.receiver === receiver);
  useEffect(() => {
    const unsubscribe = messagesListener(sender);
    return () => {
      unsubscribe();
    };
  }, [sender]);
  return (
    <div className='chat-body'>
      <h1>Chat</h1>
      {loading && <Spinner />}
      {messages && <Messages messages={messages} currentUserId={sender} />}
      {error && <ErrorText>Something wet wrong refresh</ErrorText>}
      <AddMessage sender={sender} receiver={receiver} />
    </div>
  );
};

export default ChatBody;

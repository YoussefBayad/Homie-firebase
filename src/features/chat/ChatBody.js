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
  const { data: messages, loading, error } = useSelector(
    (state) => state.messages
  );

  useEffect(() => {
    const unsubscribe = messagesListener(sender, receiver);
    return () => {
      unsubscribe();
    };
  }, [sender, receiver]);
  return (
    <div className='chat-body'>
      <h1>receiver name</h1>
      {loading && <Spinner />}
      {messages && <Messages messages={messages} />}
      {error && <ErrorText>Something wet wrong refresh</ErrorText>}
      <AddMessage />
    </div>
  );
};

export default ChatBody;

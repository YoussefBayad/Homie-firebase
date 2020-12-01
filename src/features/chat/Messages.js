import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  const messagesList = messages.map((message) => (
    <Message key={message.id} {...message} />
  ));

  return <div className='messages'>{messagesList}</div>;
};

export default Messages;

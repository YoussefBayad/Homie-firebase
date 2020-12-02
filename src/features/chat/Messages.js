import React from 'react';
import Message from './Message';

const Messages = ({ messages, currentUserId }) => {
  const messagesList = messages.map((message) => (
    <Message key={message.id} currentUserId={currentUserId} {...message} />
  ));

  return <div className='messages'>{messagesList}</div>;
};

export default Messages;

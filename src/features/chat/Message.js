import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react';
import './style.scss';

const Message = ({ sender, receiver, content, createdAt }) => {
  const date = parseISO(createdAt);
  console.log('date', date);
  const timeAgo = formatDistanceToNow(date);
  return (
    <div className={`message ${sender.id === 1 && 'sender'}`}>
      <p className='message-content'>{content}</p>
      <p className='timestamp'>{timeAgo}</p>
    </div>
  );
};

export default Message;

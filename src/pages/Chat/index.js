import React from 'react';
import { useParams } from 'react-router-dom';
import ChatBody from '../../features/chat/ChatBody';
import Users from '../../features/chat/Users';
import './style.scss';
const Chat = () => {
  const { sender, receiver } = useParams();

  return (
    <div className='chat-page'>
      <Users />
      <ChatBody sender={sender} receiver={receiver} />
    </div>
  );
};

export default Chat;

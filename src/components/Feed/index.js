import React from 'react';
import Filter from '../Filter';
import NotificationIcon from '../NotificationIcon';
import ChatIcon from '../ChatIcon';
import AddPost from '../AddPost';
//style
import './style.scss';

const index = () => {
  return (
    <div className='feed'>
      <nav>
        <Filter />
        <div className='right-nav'>
          <ChatIcon />
          <NotificationIcon />
        </div>
      </nav>
      <AddPost />
    </div>
  );
};

export default index;

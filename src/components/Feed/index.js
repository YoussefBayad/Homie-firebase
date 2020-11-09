import React from 'react';
import Filter from '../Filter';
import NotificationIcon from '../NotificationIcon';
import ChatIcon from '../ChatIcon';

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
    </div>
  );
};

export default index;
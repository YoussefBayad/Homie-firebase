import React from 'react';
import Filter from '../Filter';
import NotificationIcon from '../NotificationIcon';
import ChatIcon from '../ChatIcon';
import AddPost from '../AddPost';
import Posts from '../Posts';
//style
import './style.scss';

const Feed = () => {
  return (
    <div className='feed'>
      <nav className='feed-nav'>
        <Filter />
        <div className='right-nav'>
          <ChatIcon />
          <NotificationIcon />
        </div>
      </nav>
      <AddPost id='top' />
      <Posts />

      <a href='#top' className='back-to-top'>
        Back to top
      </a>
    </div>
  );
};

export default Feed;

import React from 'react';
import Filter from '../Filter';
import NotificationIcon from '../NotificationIcon';
import ChatIcon from '../ChatIcon';
import AddPost from '../AddPost';
import Post from '../Post';
//style
import './style.scss';

const index = () => {
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
      <div className='posts'>
        <Post />
        <Post />
        <Post />
      </div>

      <a href='#top' className='back-to-top'>
        Back to top
      </a>
    </div>
  );
};

export default index;

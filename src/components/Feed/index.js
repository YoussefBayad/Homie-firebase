import React from 'react';
import Filter from '../forms/Filter';
import NotificationIcon from '../navigation/NotificationIcon';
import ChatIcon from '../navigation/ChatIcon';
import AddPost from '../../features/posts/AddPost';
import Posts from '../../features/posts/Posts';
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

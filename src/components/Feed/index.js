import React, { memo, useEffect, useMemo } from 'react';
import Filter from '../forms/Filter';
import NotificationIcon from '../navigation/NotificationIcon';
import ChatIcon from '../navigation/ChatIcon';
import AddPost from '../../features/posts/AddPost';
import Posts from '../../features/posts/Posts';
import BackToTop from '../BackToTop';
//style
import './style.scss';
import postsListener from '../../utils/postsListener';
import likesListener from '../../utils/likesListener';
import { useSelector } from 'react-redux';

const Feed = () => {
  const userId = useSelector((state) => state.auth.user.id);
  useEffect(() => {
    console.log('mount');
    const unsubscribePosts = postsListener();
    const unsubscribeLikes = likesListener(userId);
    return () => {
      console.log('cleanUp');
      unsubscribePosts();
      unsubscribeLikes();
    };
  }, [userId]);
  return (
    <div className='feed'>
      {useMemo(
        () => (
          <nav className='feed-nav'>
            <Filter />
            <div className='right-nav'>
              <ChatIcon />
              <NotificationIcon />
            </div>
          </nav>
        ),
        []
      )}
      <AddPost id='top' />
      <Posts />
      <BackToTop />
    </div>
  );
};

export default memo(Feed);

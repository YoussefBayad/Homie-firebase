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
import commentsListener from '../../utils/commentsListener';
import NotificationListener from '../../utils/notificationsListener';

const Feed = () => {
  const { id: userId, displayName, photoURL } = useSelector(
    (state) => state.auth.user
  );

  useEffect(() => {
    const unsubscribePosts = postsListener();
    const unsubscribeLikes = likesListener(userId, displayName, photoURL);
    const unsubscribeComments = commentsListener();
    NotificationListener(userId);
    return () => {
      unsubscribePosts();
      unsubscribeLikes();
      unsubscribeComments();
    };
  }, [userId, displayName, photoURL]);
  return (
    <div className='feed '>
      {useMemo(
        () => (
          <nav className='feed-nav'>
            <Filter />
            <div className='right-nav'>
              {/* <ChatIcon /> */}
              <NotificationIcon />
            </div>
          </nav>
        ),
        []
      )}
      <AddPost />
      <Posts />
      <BackToTop />
    </div>
  );
};

export default memo(Feed);

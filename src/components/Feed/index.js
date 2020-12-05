import React, { memo, useEffect } from 'react';
import NotificationIcon from '../navigation/NotificationIcon';
import AddPost from '../../features/posts/AddPost';
import Posts from '../../features/posts/Posts';
import BackToTop from '../BackToTop';
import postsListener from '../../utils/postsListener';
import likesListener from '../../utils/likesListener';
import { useDispatch, useSelector } from 'react-redux';
import commentsListener from '../../utils/commentsListener';
import NotificationListener from '../../utils/notificationsListener';
import { fetchUsers } from '../../redux/usersSlice';
//style
import './style.scss';

const Feed = () => {
  const dispatch = useDispatch();

  const { id: userId, displayName, photoURL } = useSelector(
    (state) => state.auth.user
  );

  useEffect(() => {
    dispatch(fetchUsers());
    const unsubscribePosts = postsListener();
    const unsubscribeLikes = likesListener(userId, displayName, photoURL);
    const unsubscribeComments = commentsListener();
    NotificationListener(userId);
    return () => {
      unsubscribePosts();
      unsubscribeLikes();
      unsubscribeComments();
    };
  }, [userId, displayName, photoURL, dispatch]);
  return (
    <div className='feed '>
      <nav className='feed-nav'>
        <NotificationIcon />
      </nav>
      <AddPost />
      <Posts />
      <BackToTop />
    </div>
  );
};

export default memo(Feed);

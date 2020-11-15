import React, { useMemo } from 'react';
import Filter from '../forms/Filter';
import NotificationIcon from '../navigation/NotificationIcon';
import ChatIcon from '../navigation/ChatIcon';
import AddPost from '../../features/posts/AddPost';
import Posts from '../../features/posts/Posts';
import BackToTop from '../BackToTop';
//style
import './style.scss';
import usePostsListener from '../../hooks/usePostsListener';
import useLikesListener from '../../hooks/useLikesListener';

const Feed = () => {
  // useLikesListener();
  usePostsListener();

  return (
    <div className='feed'>
      {useMemo(
        () => (
          <>
            <nav className='feed-nav'>
              <Filter />
              <div className='right-nav'>
                <ChatIcon />
                <NotificationIcon />
              </div>
            </nav>

            <AddPost id='top' />

            <Posts />
            <BackToTop />
          </>
        ),
        []
      )}
    </div>
  );
};

export default React.memo(Feed);

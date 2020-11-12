import React from 'react';
import PostHeader from '../../../components/Post/PostHeader';
import PostSetting from '../../../components/PostSetting';
//style
import './style.scss';

const Comment = ({ userId, createdAt, photoURL, displayName }) => {
  return (
    <div className='comment'>
      <div className='comment-header'>
        <PostHeader
          id={userId}
          photoURL={photoURL}
          displayName={displayName}
          createdAt={new Date().toISOString()}
          className='post-header comment-info'
        />
        <PostSetting userId={1} postId={1} />
      </div>
      <div className='comment-content'>
        <p>i agree you will make it</p>
      </div>
    </div>
  );
};

export default Comment;

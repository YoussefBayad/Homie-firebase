import React from 'react';
import CommentHeader from '../../../components/UsernameAndDate';
import CommentSetting from '../../../components/setting';

//style
import './style.scss';

const Comment = ({
  user: { userId, photoURL, displayName },
  id,
  createdAt,
  content,
}) => {
  return (
    <div className='comment'>
      <div className='comment-header'>
        <CommentHeader
          id={userId}
          photoURL={photoURL}
          displayName={displayName}
          createdAt={createdAt}
          className='post-header comment-info'
        />
        <CommentSetting userId={userId} postId={id} />
      </div>
      <div className='comment-content'>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Comment;

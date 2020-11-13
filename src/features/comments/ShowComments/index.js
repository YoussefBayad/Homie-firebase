import React, { useState } from 'react';
import Comments from '../Comments';
import useCommentsListener from '../../../hooks/useCommentsListener';

//style
import './style.scss';

const ShowComments = ({ postId, showComments, setShowComments }) => {
  useCommentsListener(postId);

  return (
    <div className='show-comments'>
      {showComments ? (
        <Comments />
      ) : (
        <p
          className='show-comments-p'
          onClick={() => {
            setShowComments(true);
          }}>
          show comment
        </p>
      )}
    </div>
  );
};

export default ShowComments;

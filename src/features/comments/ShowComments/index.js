import React from 'react';
import useCommentsListener from '../../../hooks/useCommentsListener';

//style
import './style.scss';

const ShowComments = ({ postId, showComments, setShowComments }) => {
  useCommentsListener(postId);

  return (
    <div className='show-comments'>
      {!showComments && (
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

export default React.memo(ShowComments);

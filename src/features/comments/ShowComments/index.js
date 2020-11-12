import React, { useState } from 'react';
import Comments from '../Comments';

//style
import './style.scss';

const ShowComments = ({ postId }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className='show-comments'>
      {showComments ? (
        <Comments postId={postId} />
      ) : (
        <p
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

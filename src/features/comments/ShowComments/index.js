import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Comments from '../Comments';
import fetchComments from '../../../redux/commentsSlice';

const ShowComments = ({ postId }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      {showComments ? (
        <Comments />
      ) : (
        <p
          onClick={() => {
            dispatch(fetchComments(postId));
            setShowComments(true);
          }}>
          show comment
        </p>
      )}
    </div>
  );
};

export default ShowComments;

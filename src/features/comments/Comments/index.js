import React from 'react';
import { useSelector } from 'react-redux';
import useCommentsListener from '../../../hooks/useCommentsListener';
import Comment from '../Comment';
const Comments = ({ postId }) => {
  useCommentsListener(postId);
  const { data: comments, loading, error } = useSelector(
    (state) => state.comments
  );
  return (
    <div>
      {loading && <h1>{loading}</h1>}
      {error && <h1>{error.message}</h1>}
      {comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </div>
  );
};

export default Comments;

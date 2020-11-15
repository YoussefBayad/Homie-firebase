import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Comment from '../Comment';
import ShowComments from '../ShowComments';
import AddComment from '../AddComment';

const Comments = ({ postId }) => {
  const { data: comments, loading, error } = useSelector(
    (state) => state.comments
  );
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <ShowComments
        showComments={showComments}
        setShowComments={setShowComments}
        postId={postId}
      />

      {loading && <h1>{loading}</h1>}
      {error && <h1>{error.message}</h1>}
      {showComments &&
        comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}

      <AddComment setShowComments={setShowComments} postId={postId} />
    </>
  );
};

export default React.memo(Comments);

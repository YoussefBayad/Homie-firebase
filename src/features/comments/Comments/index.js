import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Comment from '../Comment';
import ShowComments from '../ShowComments';
import AddComment from '../AddComment';
import Spinner from '../../../components/Spinner';

const Comments = ({ postId, commentsCount }) => {
  const { data: comments, loading, error } = useSelector(
    (state) => state.comments
  );
  const [showComments, setShowComments] = useState(false);
  const postComments = comments
    .filter((comment) => comment.postId === postId)
    .map((comment) => (
      <Comment key={comment.id} {...comment} commentsCount={commentsCount} />
    ));

  return (
    <>
      <ShowComments
        showComments={showComments}
        setShowComments={setShowComments}
        postId={postId}
      />

      {loading && <Spinner />}
      {error && <h1>{error.message}</h1>}
      {showComments && postComments.length === 0 && (
        <p className='no-comment'>There is no comments on this post</p>
      )}
      {showComments && postComments}

      <AddComment
        setShowComments={setShowComments}
        postId={postId}
        commentsCount={commentsCount}
      />
    </>
  );
};

export default React.memo(Comments);

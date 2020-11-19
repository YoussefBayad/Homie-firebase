import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Comment from '../Comment';
import ShowComments from '../ShowComments';
import AddComment from '../AddComment';
import Spinner from '../../../components/Spinner';
import commentsListener from '../../../utils/commentsListener';

const Comments = ({ postId }) => {
  const { data: comments, loading, error } = useSelector(
    (state) => state.comments
  );
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    let unsubscribe = () => {};
    if (showComments) {
      console.log('comments mount');
      unsubscribe = commentsListener();
    }
    return () => {
      unsubscribe();
      console.log('comments unmount');
    };
  }, [showComments]);
  return (
    <>
      <ShowComments
        showComments={showComments}
        setShowComments={setShowComments}
        postId={postId}
      />

      {loading && <Spinner />}
      {error && <h1>{error.message}</h1>}
      {showComments &&
        comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}

      <AddComment setShowComments={setShowComments} postId={postId} />
    </>
  );
};

export default React.memo(Comments);

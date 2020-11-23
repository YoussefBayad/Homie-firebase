import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../../Firebase/utils';
import LikePost from '../LikePost';
import UnlikePost from '../UnlikePost';

const Like = ({ postId, likesCount }) => {
  const likes = useSelector((state) => state.likes.data);
  const userId = useSelector((state) => state.auth.user.id);
  const postLikes = likes.filter((like) => like.postId === postId);
  const isUserLikedPost = postLikes.find((like) => like.userId === userId);
  return (
    <div className='like'>
      {isUserLikedPost ? (
        <UnlikePost
          postId={postId}
          id={isUserLikedPost.id}
          likesCount={likesCount}
        />
      ) : (
        <LikePost postId={postId} userId={userId} likesCount={likesCount} />
      )}
    </div>
  );
};

export default Like;

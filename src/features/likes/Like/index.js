import React from 'react';
import { useSelector } from 'react-redux';
import LikePost from '../LikePost';
import UnlikePost from '../UnlikePost';

const Like = ({ postId, userId, likesCount }) => {
  const likes = useSelector((state) => state.likes.data);
  const isUserLikedPost = likes && likes.find((like) => like.postId === postId);
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

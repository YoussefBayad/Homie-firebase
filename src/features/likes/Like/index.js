import React from 'react';
import { useSelector } from 'react-redux';
import LikePost from '../LikePost';
import UnlikePost from '../UnlikePost';

const Like = ({ postId, userId }) => {
  const likes = useSelector((state) => state.likes.data);
  const isUserLikedPost = likes.filter((like) => like.postId === postId);
  return (
    <div className='like'>
      {isUserLikedPost && isUserLikedPost.length > 0 ? (
        <UnlikePost postId={isUserLikedPost.id} />
      ) : (
        <LikePost postId={postId} userId={userId} />
      )}
    </div>
  );
};

export default Like;

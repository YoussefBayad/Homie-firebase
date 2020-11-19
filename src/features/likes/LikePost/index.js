import React from 'react';
import { useDispatch } from 'react-redux';
import { like } from '../../../redux/likesSlice';
import { ReactComponent as LikeIcon } from '../../../assets/icon/like.svg';
import { editPost } from '../../../redux/postsSlice';

const LikePost = ({ userId, postId, likesCount }) => {
  const dispatch = useDispatch();
  const handleLikePost = () => {
    dispatch(like({ postId, userId }));
    dispatch(editPost({ id: postId, likesCount: likesCount + 1 }));
  };

  return <LikeIcon onClick={handleLikePost} />;
};

export default LikePost;

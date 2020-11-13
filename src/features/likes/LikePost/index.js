import React from 'react';
import { useDispatch } from 'react-redux';
import { like } from '../../../redux/likesSlice';
import { ReactComponent as LikeIcon } from '../../../assets/icon/like.svg';

const LikePost = ({ userId, postId }) => {
  const dispatch = useDispatch();

  const handleLikePost = () => {
    dispatch(like({ postId, userId }));
  };

  return <LikeIcon onClick={handleLikePost} />;
};

export default LikePost;

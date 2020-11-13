import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as HeartIcon } from '../../../assets/icon/heart.svg';
import { unlike } from '../../../redux/likesSlice';

const UnlikePost = ({ id }) => {
  const dispatch = useDispatch();

  const handleUnlikePost = () => {
    dispatch(unlike(id));
  };
  return <HeartIcon onClick={handleUnlikePost} />;
};

export default UnlikePost;

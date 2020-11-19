import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as HeartIcon } from '../../../assets/icon/heart.svg';
import { unlike } from '../../../redux/likesSlice';
import { editPost } from '../../../redux/postsSlice';

const UnlikePost = ({ id, postId, likesCount }) => {
  const dispatch = useDispatch();

  const handleUnlikePost = () => {
    dispatch(unlike(id));
    dispatch(editPost({ id: postId, likesCount: likesCount - 1 }));
  };
  return <HeartIcon onClick={handleUnlikePost} />;
};

export default UnlikePost;

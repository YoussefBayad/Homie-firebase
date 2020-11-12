import React from 'react';
import { useSelector } from 'react-redux';

const Comments = () => {
  const { data: comments, loading, error } = useSelector(
    (state) => state.comments
  );
  return <div></div>;
};

export default Comments;

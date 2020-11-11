import React from 'react';
import { useDispatch } from 'react-redux';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../Firebase/utils';

const usePostsListener = () => {
  const dispatch = useDispatch();
  const [posts, loading, error] = useCollection(db.collection('posts'));
  if (loading)
    dispatch({
      type: 'posts/fetchPosts/pending',
      payload: { posts, loading, error },
    });
  if (error)
    dispatch({
      type: 'posts/fetchPosts/rejected',
      payload: { posts, loading, error },
    });
  if (posts)
    dispatch({
      type: 'posts/fetchPosts/fulfilled',
      payload: { posts, loading, error },
    });
};

export default usePostsListener;

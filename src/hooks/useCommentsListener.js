import React from 'react';
import { useDispatch } from 'react-redux';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../Firebase/utils';

const useCommentsListener = ({ postId }) => {
  const query = db
    .collection('comments')
    .where('postId', '==', postId)
    .orderBy('createdAt', 'asc');

  const dispatch = useDispatch();
  const [data, loading, error] = useCollectionData(query, { idField: 'id' });

  if (loading)
    dispatch({
      type: 'comments/fetchComments/pending',
      payload: { data, loading, error },
    });
  if (error)
    dispatch({
      type: 'comments/fetchComments/rejected',
      payload: { data, loading, error },
    });
  if (data) {
    dispatch({
      type: 'comments/fetchComments/fulfilled',
      payload: { data, loading, error },
    });
  }
};

export default useCommentsListener;

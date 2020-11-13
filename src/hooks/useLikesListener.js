import { useDispatch } from 'react-redux';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../Firebase/utils';

const useLikesListener = (userId) => {
  const dispatch = useDispatch();

  const query = db.collection('likes').where('userId', '==', userId);
  const [data, loading, error] = useCollectionData(query, { idField: 'id' });

  if (loading)
    dispatch({
      type: 'likes/fetchLikes/pending',
      payload: { data, loading, error },
    });
  if (error)
    dispatch({
      type: 'likes/fetchLikes/rejected',
      payload: { data, loading, error },
    });
  if (data) {
    dispatch({
      type: 'likes/fetchLikes/fulfilled',
      payload: { data, loading, error },
    });
  }
};

export default useLikesListener;

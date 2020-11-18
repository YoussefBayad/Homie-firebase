import { useDispatch } from 'react-redux';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../Firebase/utils';

const usePostsListener = () => {
  const dispatch = useDispatch();
  const query = db.collection('posts').orderBy('createdAt', 'desc');

  const [data, loading, error] = useCollectionData(query, { idField: 'id' });

  if (loading)
    dispatch({
      type: 'posts/fetchPosts/pending',
      payload: loading,
    });
  if (error)
    dispatch({
      type: 'posts/fetchPosts/rejected',
      payload: { data, loading, error },
    });
  if (data) {
    dispatch({
      type: 'posts/fetchPosts/fulfilled',
      payload: { data, loading, error },
    });
  }
};

export default usePostsListener;

import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../../components/Spinner';
import useLikesListener from '../../../hooks/useCommentsListener';
import Post from '../Post';

//style
import './style.scss';
const Posts = () => {
  const { data: posts, loading, error } = useSelector((state) => state.posts);
  const userId = useSelector((state) => state.auth.user.id);
  useLikesListener(userId);

  return (
    <motion.div layout className='posts'>
      {loading && <Spinner style={{ height: '15rem', width: '15rem' }} />}
      {error && <h1>{error.message}</h1>}
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </motion.div>
  );
};

export default Posts;

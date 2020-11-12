import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../Post';

//style
import './style.scss';
const Posts = () => {
  const { data: posts, loading, error } = useSelector((state) => state.posts);

  return (
    <motion.div layout className='posts'>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </motion.div>
  );
};

export default Posts;

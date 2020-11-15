import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../../components/Spinner';
import Post from '../Post';

//style
import './style.scss';
const Posts = () => {
  const { data: posts, loading, error } = useSelector((state) => state.posts);

  return (
    <div className='posts'>
      {loading && <Spinner style={{ height: '15rem', width: '15rem' }} />}
      {error && <h1>{error.message}</h1>}
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
};

export default Posts;

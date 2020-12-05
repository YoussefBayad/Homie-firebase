import React from 'react';
import UsernameAndDate from '../../components/UsernameAndDate';
import './style.scss';
const SearchResults = ({ posts, users, query }) => {
  return (
    <div className='search-results'>
      <div className='search-users'>
        <h1>users</h1>
        <div className='search-users-results'>
          {users.length > 0 &&
            users.map((user) => (
              <div className='user-result'>
                <UsernameAndDate {...user} />
              </div>
            ))}
          {users.length === 0 && (
            <p className='no-result'> no match for "{query}"</p>
          )}
        </div>
      </div>
      <div className='search-posts'>
        <h1>Posts</h1>
        <div className='search-posts-results'>
          {posts.length > 0 &&
            posts.map((post) => (
              <div className='post-result'>
                <UsernameAndDate {...post.user} />{' '}
                <p className='post-content'>{post.content}</p>
              </div>
            ))}
          {posts.length === 0 && (
            <p className='no-result'> no post contains "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

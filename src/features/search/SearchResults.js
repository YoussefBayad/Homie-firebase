import React from 'react';
import UsernameAndDate from '../../components/UsernameAndDate';

const SearchResults = ({ posts, users, query }) => {
  return (
    <div className='search-results'>
      <div className='search-users'>
        <h1>users</h1>
        <div className='search-users-results'>
          {users.length > 0 &&
            users.map((user) => <UsernameAndDate {...user} />)}
          {users.length === 0 && <p> There is no user such "{query}"</p>}
        </div>
      </div>
      <div className='search-posts'>
        <h1>Posts</h1>
        <div className='search-posts-results'>
          {posts.length > 0 &&
            posts.map((post) => (
              <>
                <h1>{post.user.displayName}</h1>
                <p>{post.content}</p>
              </>
            ))}
          {posts.length === 0 && <p> no post contains "{query}"</p>}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

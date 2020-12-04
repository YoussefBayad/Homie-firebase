import React from 'react';

const SearchResults = ({ posts, query }) => {
  return (
    <div className='search-results'>
      <div className='search-users'>
        <h1>users</h1>
        <div className='search-users-results'></div>
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

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/forms/Filter';
import filterData from '../../features/search/filterData';
import SearchResults from '../../features/search/SearchResults';

//style
import './style.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  // const users = useSelector(state => state.users.data);
  const posts = useSelector((state) => state.posts.data);
  const [postsResults, setPostsResults] = useState([]);
  // const [usersResults, setUsersResults] = useState([]);

  useEffect(() => {
    setPostsResults(filterData(query, posts));
    // setUsersResults(filterData(query, users));
  }, [query, posts]);

  return (
    <div className='search-page'>
      <Filter value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults posts={postsResults} query={query} />
    </div>
  );
};

export default Search;

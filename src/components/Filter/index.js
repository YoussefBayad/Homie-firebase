import React from 'react';
import './style.scss';

const Filter = () => {
  return (
    <div className='filter-box'>
      <input className='filter' type='text' placeholder='Search ...' />
      <img src='/assets/icon/search.svg' alt='search' />
    </div>
  );
};

export default Filter;

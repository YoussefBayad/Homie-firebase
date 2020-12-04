import React from 'react';
import './style.scss';
import { ReactComponent as SearchIcon } from '../../../assets/icon/search.svg';

const Filter = ({ ...rest }) => {
  return (
    <div className='filter-box'>
      <input
        {...rest}
        className='filter'
        type='text'
        placeholder='Search ...'
      />
      <SearchIcon />
    </div>
  );
};

export default Filter;

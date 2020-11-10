import React from 'react';
import Button from '../forms/Button';

//style
import './style.scss';

const index = () => {
  return (
    <div className='add-post'>
      <div className='circle'>
        <img src='/assets/icon/me.jpg' alt='user' />
      </div>
      <div className='first-row'>
        <textarea placeholder="What's on your mind?" />
        <div className='second-row'>
          <img src='/assets/icon/search.svg' alt='add media' />
          <Button disable='true'>Post</Button>
        </div>
      </div>
    </div>
  );
};

export default index;

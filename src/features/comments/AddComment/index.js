import React from 'react';

//style
import './style.scss';

const index = ({ photoURL, displayName }) => {
  return (
    <div className='add-comment'>
      <div className='circle'>
        <img src={photoURL} title={displayName} alt='user' />
      </div>
      <input type='text' placeholder='Write a comment...' />
    </div>
  );
};

export default index;

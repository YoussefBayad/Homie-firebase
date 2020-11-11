import React from 'react';
import avatar from '../../assets/icon/me.jpg';

//style
import './style.scss';

const index = () => {
  return (
    <div className='add-comment'>
      <div className='circle'>
        <img src={avatar} alt='user' />
      </div>
      <input type='text' placeholder='Write a comment...' />
    </div>
  );
};

export default index;

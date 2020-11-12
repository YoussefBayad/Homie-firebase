import React from 'react';
import PostSetting from '../../../components/PostSetting';
//style
import './style.scss';

const Comment = ({ photoURL, displayName }) => {
  return (
    <div className='comment'>
      <div className='circle'>
        <img src={photoURL} title={displayName} alt='user' />
      </div>
      <p>i agree you will make it</p>
      <PostSetting />
    </div>
  );
};

export default Comment;

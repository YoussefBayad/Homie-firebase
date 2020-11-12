import React from 'react';
import { Link } from 'react-router-dom';

const PostHeader = ({ id, photoURL, displayName, date, timeAgo }) => {
  return (
    <Link to={`/profile/${id}`}>
      <div className='post-header'>
        <div className='circle'>
          <img src={photoURL} alt='user' />
        </div>
        <div className='username-and-date'>
          <p className='post-username'>{displayName} </p>
          <p className='post-date' title={date}>
            <i>{timeAgo} ago</i>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostHeader;

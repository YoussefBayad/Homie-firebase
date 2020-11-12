import React from 'react';
import { Link } from 'react-router-dom';
import { parseISO, formatDistanceToNow } from 'date-fns';

const PostHeader = ({
  id,
  photoURL,
  displayName,
  createdAt,
  ...otherProps
}) => {
  const date = parseISO(createdAt);
  const timeAgo = formatDistanceToNow(date);
  return (
    <Link to={`/profile/${id}`}>
      <div className='post-header' {...otherProps}>
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

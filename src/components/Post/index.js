import React from 'react';
import AddComment from '../AddComment';
import PostSetting from '../PostSetting';

//icons
import avatar from '../../assets/icon/me.jpg';

import { ReactComponent as LikeIcon } from '../../assets/icon/like.svg';
import { ReactComponent as CommentIcon } from '../../assets/icon/comment.svg';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';
import { parseISO, formatDistanceToNow } from 'date-fns';

//style
import './style.scss';

const index = ({
  id,
  user: { userId, photoURL, displayName },
  createdAt,
  content,
}) => {
  const date = parseISO(createdAt);
  const timeAgo = formatDistanceToNow(date);
  return (
    <div className='post'>
      <div className='post-data'>
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
        <PostSetting id={id} />
      </div>
      <div className='post-body'>
        <p> {content}</p>
      </div>
      <div className='post-interactions'>
        <LikeIcon />
        <CommentIcon />
        <ShareIcon />
      </div>
      <AddComment />
    </div>
  );
};

export default index;

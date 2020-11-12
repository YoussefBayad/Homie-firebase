import React, { useState } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import AddComment from '../AddComment';
import PostSetting from '../PostSetting';
import PostHeader from './PostHeader';
import EditPost from './EditPost';

//icons

import { ReactComponent as LikeIcon } from '../../assets/icon/like.svg';
import { ReactComponent as CommentIcon } from '../../assets/icon/comment.svg';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';

//style
import './style.scss';

const Post = ({
  id,
  user: { userId, photoURL, displayName },
  createdAt,
  content,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const date = parseISO(createdAt);
  const timeAgo = formatDistanceToNow(date);

  return (
    <div className='post'>
      <div className='post-data'>
        <PostHeader
          id={userId}
          photoURL={photoURL}
          displayName={displayName}
          date={date}
          timeAgo={timeAgo}
        />
        <PostSetting id={id} setIsEditing={setIsEditing} />
      </div>
      {isEditing === false ? (
        <>
          <div className='post-body'>
            <p> {content}</p>
          </div>
          <div className='post-interactions'>
            <LikeIcon />
            <CommentIcon />
            <ShareIcon />
          </div>
          <AddComment />
        </>
      ) : (
        <EditPost content={content} id={id} setIsEditing={setIsEditing} />
      )}
    </div>
  );
};

export default Post;

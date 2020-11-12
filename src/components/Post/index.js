import React, { useState } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import AddComment from '../../features/comments/AddComment';
import ShowComments from '../../features/comments/ShowComments';
import Comment from '../../features/comments/Comment';
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
          {/* <ShowComments postId={id} /> */}
          <Comment photoURL={photoURL} displayName={displayName} />
          <Comment photoURL={photoURL} displayName={displayName} />
          <Comment photoURL={photoURL} displayName={displayName} />
          <AddComment photoURL={photoURL} displayName={displayName} />
        </>
      ) : (
        <EditPost content={content} id={id} setIsEditing={setIsEditing} />
      )}
    </div>
  );
};

export default Post;

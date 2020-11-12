import React, { useState } from 'react';
import AddComment from '../../comments/AddComment';
import ShowComments from '../../comments/ShowComments';
import Comment from '../../comments/Comment';
import PostSetting from '../../../components/setting';
import PostHeader from './PostHeader';
import EditPost from '../EditPost';

//icons

import { ReactComponent as LikeIcon } from '../../../assets/icon/like.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icon/comment.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icon/share.svg';

//style
import './style.scss';

const Post = ({
  id,
  user: { id: userId, photoURL, displayName },
  createdAt,
  content,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='post'>
      <div className='post-data'>
        <PostHeader
          id={userId}
          photoURL={photoURL}
          displayName={displayName}
          createdAt={createdAt}
        />
        <PostSetting id={id} userId={userId} setIsEditing={setIsEditing} />
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
          <ShowComments postId={id} />

          <AddComment postId={id} />
        </>
      ) : (
        <EditPost
          userId={userId}
          content={content}
          id={id}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Post;

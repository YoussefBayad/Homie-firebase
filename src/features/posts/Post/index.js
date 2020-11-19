import React, { useState } from 'react';
import Comments from '../../comments/Comments';
import PostSetting from '../../../components/setting';
import PostHeader from '../../../components/UsernameAndDate/';
import EditPost from '../../../components/Edit';
import Like from '../../likes/Like';
//icons

import { ReactComponent as CommentIcon } from '../../../assets/icon/comment.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icon/share.svg';
import { deletePost, editPost } from '../../../redux/postsSlice';

//style
import './style.scss';
import { useMemo } from 'react';

const Post = ({
  id,
  user: { id: userId, photoURL, displayName },
  createdAt,
  content,
  commentsCount,
  likesCount,
  sharesCount,
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
        <PostSetting
          id={id}
          userId={userId}
          setIsEditing={setIsEditing}
          deleteThunk={deletePost}
        />
      </div>
      {!isEditing ? (
        <div className='post-body'>
          <p> {content}</p>
        </div>
      ) : (
        <EditPost
          userId={userId}
          content={content}
          id={id}
          editThunk={editPost}
          setIsEditing={setIsEditing}
        />
      )}
      {useMemo(
        () => (
          <div className='post-interactions'>
            <div className='interaction'>
              <Like postId={id} userId={userId} likesCount={likesCount} />
              <p className='count'>{likesCount} </p>
            </div>
            <div className='interaction'>
              <CommentIcon />
              <p className='count'>{commentsCount}</p>
            </div>
            <div className='interaction'>
              <ShareIcon />
              <p className='count'>{sharesCount}</p>
            </div>
          </div>
        ),
        [id, userId, commentsCount, likesCount, sharesCount]
      )}
      <Comments postId={id} commentsCount={commentsCount} />
    </div>
  );
};

export default React.memo(Post);

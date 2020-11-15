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
            <Like postId={id} userId={userId} />
            <CommentIcon />
            <ShareIcon />
          </div>
        ),
        [id, userId]
      )}
      <Comments postId={id} />
    </div>
  );
};

export default React.memo(Post);

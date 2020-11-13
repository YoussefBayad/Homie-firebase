import React, { useState } from 'react';
import AddComment from '../../comments/AddComment';
import ShowComments from '../../comments/ShowComments';
import PostSetting from '../../../components/setting';
import PostHeader from '../../../components/UsernameAndDate';
import EditPost from '../../../components/Edit';
import editPost from '../../../redux/postsSlice';

//icons

import { ReactComponent as LikeIcon } from '../../../assets/icon/like.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icon/comment.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icon/share.svg';
import { deletePost } from '../../..//redux/postsSlice';

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
        <PostSetting
          id={id}
          userId={userId}
          setIsEditing={setIsEditing}
          deleteThunk={deletePost}
        />
      </div>
      {!isEditing ? (
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
          editThunk={editPost}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Post;

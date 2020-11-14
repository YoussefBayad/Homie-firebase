import React, { useState } from 'react';
import AddComment from '../../comments/AddComment';
import ShowComments from '../../comments/ShowComments';
import PostSetting from '../../../components/setting';
import PostHeader from '../../../components/UsernameAndDate';
import EditPost from '../../../components/Edit';
import Like from '../../likes/Like';
//icons

import { ReactComponent as LikeIcon } from '../../../assets/icon/like.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icon/comment.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icon/share.svg';
import { deletePost, editPost } from '../../../redux/postsSlice';

//style
import './style.scss';

const Post = ({
  id,
  user: { id: userId, photoURL, displayName },
  createdAt,
  content,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showComments, setShowComments] = useState(false);

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
      <div className='post-interactions'>
        <Like postId={id} userId={userId} />
        <CommentIcon />
        <ShareIcon />
      </div>
      <ShowComments
        showComments={showComments}
        setShowComments={setShowComments}
        postId={id}
      />
      <AddComment setShowComments={setShowComments} postId={id} />
    </div>
  );
};

export default Post;

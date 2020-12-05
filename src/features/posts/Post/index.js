import React, { useState, useMemo } from 'react';
import Comments from '../../comments/Comments';
import PostSetting from '../../../components/setting';
import PostHeader from '../../../components/UsernameAndDate/';
import EditPost from '../../../components/Edit';
import Like from '../../likes/Like';
import Share from '../../share';

//icons
import { ReactComponent as CommentIcon } from '../../../assets/icon/comment.svg';
import { deletePost, editPost } from '../../../redux/postsSlice';

//style
import './style.scss';

const Post = ({
  id,
  user: { id: userId, photoURL: userPhotoURL, displayName },
  createdAt,
  content,
  commentsCount,
  likesCount,
  sharesCount,
  photoURL,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className='post' id={id}>
      <div className='post-data'>
        <PostHeader
          id={userId}
          photoURL={userPhotoURL}
          displayName={displayName}
          createdAt={createdAt}
        />
        <PostSetting
          id={id}
          postId={id}
          userId={userId}
          setIsEditing={setIsEditing}
          deleteThunk={deletePost}
        />
      </div>
      {!isEditing ? (
        <div className='post-body'>
          <p className='post-content'> {content}</p>
          {photoURL && <img src={photoURL} alt='post' />}
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
              <Share sharesCount={sharesCount} />
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

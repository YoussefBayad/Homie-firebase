import React, { useState } from 'react';
import CommentHeader from '../../../components/UsernameAndDate/';
import CommentSetting from '../../../components/setting';
import { deleteComment, editComment } from '../../../redux/commentsSlice';
import EditComment from '../../../components/Edit';

//style
import './style.scss';
import { useMemo } from 'react';

const Comment = ({
  user: { id: userId, photoURL, displayName },
  id,
  createdAt,
  content,
  commentsCount,
  postId,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='comment'>
      {useMemo(
        () => (
          <>
            <div className='comment-header'>
              <CommentHeader
                id={userId}
                photoURL={photoURL}
                displayName={displayName}
                createdAt={createdAt}
                className='post-header comment-info'
              />
              <CommentSetting
                userId={userId}
                id={id}
                deleteThunk={deleteComment}
                setIsEditing={setIsEditing}
                postId={postId}
                commentsCount={commentsCount}
              />
            </div>

            {!isEditing ? (
              <div className='comment-content'>
                <p>{content}</p>
              </div>
            ) : (
              <EditComment
                userId={userId}
                content={content}
                id={id}
                editThunk={editComment}
                setIsEditing={setIsEditing}
                height='5rem'
              />
            )}
          </>
        ),
        [
          userId,
          photoURL,
          displayName,
          createdAt,
          id,
          postId,
          isEditing,
          content,
        ]
      )}
    </div>
  );
};

export default Comment;

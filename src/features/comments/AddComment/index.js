import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DirectIcon } from '../../../assets/icon/direct.svg';
import { addComment } from '../../../redux/commentsSlice';
//style
import './style.scss';

const AddComment = ({ postId, setShowComments }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { displayName, photoURL, id } = user;
  const [content, setContent] = useState('');
  const handleAddComment = (e) => {
    e.preventDefault();
    if (content === '') return;
    const comment = {
      createdAt: new Date().toISOString(),
      user: {
        displayName,
        photoURL,
        id,
      },
      content,
      postId,
    };
    dispatch(addComment(comment));
    setShowComments(true);
    setContent('');
  };
  return (
    <div className='add-comment'>
      <div className='circle'>
        <img src={photoURL} title={displayName} alt='user' />
      </div>
      <form onSubmit={handleAddComment}>
        <div className='add-comment-input'>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type='text'
            placeholder='Write a comment...'
          />
          <DirectIcon
            className={content && 'submit'}
            type='submit'
            onClick={handleAddComment}
          />
        </div>
      </form>
    </div>
  );
};

export default AddComment;

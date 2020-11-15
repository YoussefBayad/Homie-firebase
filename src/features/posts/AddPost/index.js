import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../components/forms/Button';
import { ReactComponent as ImgIcon } from '../../../assets/icon/media.svg';
import { addPost } from '../../../redux/postsSlice';
import Textarea from '../../../components/forms/Textarea';

//style
import './style.scss';
import { useMemo } from 'react';
import { useCallback } from 'react';

const AddPost = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading);
  const user = useSelector((state) => state.auth.user);
  const [content, setContent] = useState('');
  const canSave = content.trim() && !loading;
  const photoURL = null;

  const handleAddPost = () => {
    const post = {
      createdAt: new Date().toISOString(),
      user: {
        displayName: user.displayName,
        id: user.id,
        photoURL: user.photoURL,
      },
      likesCount: 0,
      commentsCount: 0,
      sharesCount: 0,
      content,
      photoURL,
    };
    dispatch(addPost(post));
    setContent('');
  };
  return (
    <div className='add-post'>
      {useMemo(
        () => (
          <div className='circle'>
            <img title={user.displayName} src={user.photoURL} alt='user' />
          </div>
        ),
        [user.displayName, user.photoURL]
      )}
      <div className='first-row'>
        <Textarea
          placeholder="What's on your mind?"
          content={content}
          setContent={setContent}
        />

        <div className='second-row'>
          <ImgIcon fill=' #fcac46' />

          <Button onClick={handleAddPost} disabled={!canSave}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddPost);

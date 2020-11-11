import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../forms/Button';
import avatar from '../../assets/icon/me.jpg';
import { ReactComponent as ImgIcon } from '../../assets/icon/media.svg';
import { addPost } from '../../redux/postsSlice';
//style
import './style.scss';

const AddPost = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading);
  const user = useSelector((state) => state.auth.user);
  const [content, setContent] = useState('');
  const canSave = content && !loading;
  const photoURL = 'later Bro';

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
      <div className='circle'>
        <img src={avatar} alt='user' />
      </div>
      <div className='first-row'>
        <textarea
          placeholder="What's on your mind?"
          onChange={(e) => setContent(e.target.value)}
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

export default AddPost;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../components/forms/Button';
import { addPost } from '../../../redux/postsSlice';
import Textarea from '../../../components/forms/Textarea';
// import avatar from '../../../assets/icon/unknownUser.jpg';
//style
import './style.scss';
import { useMemo } from 'react';
import { useCallback } from 'react';
import UploadForm from '../../../components/Upload';

const AddPost = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [content, setContent] = useState('');
  const [photoURL, setPhotoURL] = useState(null);
  const canSave = useMemo(() => content.trim() && true, [content]);

  const handleAddPost = useCallback(() => {
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
  }, [user.displayName, user.id, user.photoURL, content, dispatch]);
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
        {photoURL && (
          <div className='post-img'>
            <img src={photoURL} alt='post' />
          </div>
        )}
        <div className='second-row'>
          <UploadForm svg='image' setPhotoURL={setPhotoURL} />
          <Button onClick={handleAddPost} disabled={!canSave}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddPost);

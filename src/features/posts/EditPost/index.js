import React, { useState } from 'react';
import Textarea from '../../../components/forms/Textarea';
import Button from '../../../components/forms/Button';
import { editPost } from '../../../redux/postsSlice';
import { useDispatch } from 'react-redux';

//style
import './style.scss';

const EditPost = ({ content, id, setIsEditing }) => {
  const dispatch = useDispatch();
  const [newContent, setNewContent] = useState(content);
  const handleEditPost = () => {
    dispatch(
      editPost({
        id,
        newContent,
      })
    );
    setIsEditing(false);
  };

  return (
    <div className='edit-post'>
      <Textarea autoFocus content={newContent} setContent={setNewContent} />
      <Button onClick={handleEditPost}>Update</Button>
    </div>
  );
};

export default EditPost;

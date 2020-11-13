import React, { useState } from 'react';
import Textarea from '../forms/Textarea';
import Button from '../forms/Button';
import { useDispatch } from 'react-redux';

//style
import './style.scss';

const Edit = ({ content, id, editThunk, setIsEditing }) => {
  const dispatch = useDispatch();
  const [newContent, setNewContent] = useState(content);
  const handleEditPost = () => {
    dispatch(
      editThunk({
        id,
        content: newContent,
      })
    );
    setIsEditing(false);
  };

  return (
    <div className='edit-post'>
      <Textarea autoFocus content={newContent} setContent={setNewContent} />
      <Button disabled={!newContent} onClick={handleEditPost}>
        Update
      </Button>
    </div>
  );
};

export default Edit;

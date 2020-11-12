import React, { useState } from 'react';
import useOutsideClickRef from '@rooks/use-outside-click-ref';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/postsSlice';
//icon
import { ReactComponent as EditIcon } from '../../assets/icon/edit.svg';
//style
import './style.scss';

const PostSetting = ({ id, setIsEditing }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [ref] = useOutsideClickRef(() => setIsOpen(false));

  const handleDeletePost = () => {
    dispatch(deletePost(id));
  };

  return (
    <div className='post-setting'>
      <EditIcon onClick={() => setIsOpen((prev) => !prev)} />

      {isOpen && (
        <div ref={ref} className='post-setting-modal'>
          <p
            onClick={() => {
              setIsEditing((prev) => !prev);
              setIsOpen(false);
            }}
            className='edit-post'>
            Edit
          </p>
          <p onClick={handleDeletePost} className='delete-post'>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PostSetting;

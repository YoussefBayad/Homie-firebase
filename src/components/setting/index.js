import React, { memo, useState } from 'react';
import useOutsideClickRef from '@rooks/use-outside-click-ref';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/postsSlice';

//icon
import { ReactComponent as EditIcon } from '../../assets/icon/edit.svg';
//style
import './style.scss';
import { useMemo } from 'react';

const PostSetting = ({ id, userId, setIsEditing, deleteThunk, postId }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.data);
  const { commentsCount } = useMemo(
    () => posts.find((post) => post.id === postId),
    [postId, posts]
  );
  console.log('commentsCount', commentsCount);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [ref] = useOutsideClickRef(() => setIsOpen(false));
  const showSetting = currentUser.id === userId;
  const handleDelete = () => {
    dispatch(deleteThunk(id));
    dispatch(editPost({ id: postId, commentsCount: commentsCount - 1 }));
  };
  return (
    <div className='post-setting'>
      {showSetting && <EditIcon onClick={() => setIsOpen((prev) => !prev)} />}
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
          <p onClick={handleDelete} className='delete-post'>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(PostSetting);

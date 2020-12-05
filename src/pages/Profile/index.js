import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userInfoListener from '../../utils/userInfoListener';
import UserInfo from '../../components/UserInfo';
import Posts from '../../features/posts/Posts';
import BackToTop from '../../components/BackToTop';
import { Link, useParams } from 'react-router-dom';
import likesListener from '../../utils/likesListener';
import postsListener from '../../utils/postsListener';
import AddPost from '../../features/posts/AddPost';
import Button from '../../components/forms/Button';
import { ReactComponent as DirectIcon } from '../../assets/icon/direct.svg';

//style
import './style.scss';
import { fetchUsers } from '../../redux/usersSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const currentUserId = useSelector((state) => state.auth.user.id);
  const user = users.length > 0 && users.find((user) => user.id === id);

  const ifCurrentUser = user && user.id === currentUserId;
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const unsubscribeUser = userInfoListener(id);
    const unsubscribeLikes = likesListener(id);
    const unsubscribePost = postsListener();
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
    return () => {
      unsubscribeUser();
      unsubscribeLikes();
      unsubscribePost();
    };
  }, [id, users, dispatch]);

  return (
    <div className='profile'>
      {user && (
        <>
          <UserInfo
            ifCurrentUser={ifCurrentUser}
            showUpload
            user={user}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
          />
          {ifCurrentUser && !isEditing && (
            <Button
              className='btn profile-info-edit'
              onClick={() => setIsEditing(true)}>
              Edit Info
            </Button>
          )}
          {!ifCurrentUser && (
            <Link
              to={`/chat/${currentUserId}/${id}`}
              className='btn send-message'>
              Send Message
              <DirectIcon />
            </Link>
          )}
        </>
      )}
      <h2>Posts</h2>
      {ifCurrentUser && <AddPost />}
      <Posts userId={id} />
      <BackToTop />
    </div>
  );
};

export default React.memo(Profile);

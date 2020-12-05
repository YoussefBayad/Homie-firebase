import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import userInfoListener from '../../utils/userInfoListener';
import UserInfo from '../../components/UserInfo';
import Posts from '../../features/posts/Posts';
import BackToTop from '../../components/BackToTop';
import { Redirect, useParams } from 'react-router-dom';
import likesListener from '../../utils/likesListener';
import postsListener from '../../utils/postsListener';
import AddPost from '../../features/posts/AddPost';
import Button from '../../components/forms/Button';

//style
import './style.scss';

const Profile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const currentUserId = useSelector((state) => state.auth.user.id);
  const user = users.find((user) => user.id === Number(id));
  const ifCurrentUser = user && user.id === currentUserId;
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const unsubscribeUser = userInfoListener(id);
    const unsubscribeLikes = likesListener(id);
    const unsubscribePost = postsListener();
    return () => {
      unsubscribeUser();
      unsubscribeLikes();
      unsubscribePost();
    };
  }, [id]);

  return (
    <div className='profile'>
      {user && (
        <>
          <UserInfo
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
        </>
      )}
      {!user && <Redirect to='/' />}
      <h2>Posts</h2>
      {ifCurrentUser && <AddPost />}
      <Posts userId={id} />
      <BackToTop />
    </div>
  );
};

export default Profile;

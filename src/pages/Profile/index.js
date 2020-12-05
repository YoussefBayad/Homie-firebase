import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import userInfoListener from '../../utils/userInfoListener';
import UserInfo from '../../components/UserInfo';
import Posts from '../../features/posts/Posts';
import BackToTop from '../../components/BackToTop';
import { useParams } from 'react-router-dom';
import likesListener from '../../utils/likesListener';
import postsListener from '../../utils/postsListener';
import AddPost from '../../features/posts/AddPost';
import Button from '../../components/forms/Button';

//style
import './style.scss';
import Spinner from '../../components/Spinner';

const Profile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id === Number(id));
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
          {!isEditing && (
            <Button
              className='btn profile-info-edit'
              onClick={() => setIsEditing(true)}>
              Edit Info
            </Button>
          )}
        </>
      )}
      {!user && <Spinner />}
      <h2>Posts</h2>
      <AddPost />
      <Posts userId={id} />
      <BackToTop />
    </div>
  );
};

export default Profile;

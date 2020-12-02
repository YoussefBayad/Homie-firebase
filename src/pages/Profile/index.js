import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import userInfoListener from '../../utils/userInfoListener';
import UserInfo from '../../components/UserInfo';
import Posts from '../../features/posts/Posts';
import BackToTop from '../../components/BackToTop';
import UploadForm from '../../components/Upload';
import { useParams } from 'react-router-dom';
import likesListener from '../../utils/likesListener';
import postsListener from '../../utils/postsListener';
import AddPost from '../../features/posts/AddPost';
import Button from '../../components/forms/Button';

//style
import './style.scss';
import fetchUser from '../../utils/fetchUser';
import Spinner from '../../components/Spinner';

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const { id } = useParams();
  let user = null;
  Number(id) === currentUser.id ? (user = currentUser) : (user = fetchUser(id));

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

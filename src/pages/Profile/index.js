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

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const { id: userId } = useParams();

  const [isEditing, setIsEditing] = useState(false);

  const {
    id,
    displayName,
    photoURL,
    bio,
    postsCount,
    followersCount,
    followingCount,
  } = user;

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
      <h2>Posts</h2>
      <AddPost />
      <Posts userId={user.id} />
      <BackToTop />
    </div>
  );
};

export default Profile;

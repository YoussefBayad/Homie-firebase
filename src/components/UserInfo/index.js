import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';

//style
import './style.scss';

const UserInfo = () => {
  const { user, loading, error } = useSelector((state) => state.auth);

  return (
    <div className='user-info'>
      <>
        <div className='circle'>
          <img src={user.photoURL} alt='' />
        </div>
        <h3 className='username'>{user.displayName}</h3>
        <h4 className='bio'>{user.bio}</h4>
        <div className='profile-numbers'>
          <div className='profile-number'>
            <p>{user.postsCount}</p>
            <p>posts</p>
          </div>
          <div className='profile-number'>
            <p>{user.followersCount}</p>
            <p>followers</p>
          </div>
          <div className='profile-number'>
            <p>{user.followingCount}</p>
            <p>following</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default UserInfo;

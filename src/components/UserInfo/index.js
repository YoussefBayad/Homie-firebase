import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

//style
import './style.scss';

const UserInfo = ({ user }) => {
  return (
    <div className='user-info'>
      <Link to={`/profile/${user.id}`}>
        <div className='circle'>
          <img src={user.photoURL} alt='' />
        </div>
        <h3 className='username'>{user.displayName}</h3>
      </Link>
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
    </div>
  );
};

export default UserInfo;

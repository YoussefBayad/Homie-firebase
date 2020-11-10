import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/utils';

//style
import './style.scss';
const index = () => {
  return (
    <nav className='desktop-nav'>
      <Link to='/' className='link'>
        <img src='/assets/icon/search.svg' alt='icon' />
        <p>Feed</p>
      </Link>
      <Link to='/chat' className='link'>
        <img src='/assets/icon/search.svg' alt='icon' />
        <p>Mingle</p>
      </Link>
      <Link to='/chat' className='link'>
        <img src='/assets/icon/search.svg' alt='icon' />
        <p>notification</p>
      </Link>
      <Link to='/notification' className='link'>
        <img src='/assets/icon/search.svg' alt='icon' />
        <p>Post</p>
      </Link>
      <Link to='/profile' className='link'>
        <img src='/assets/icon/search.svg' alt='icon' />
        <p>Profile</p>
      </Link>
      <div className='link' onClick={() => auth.signOut()}>
        <img src='/assets/icon/search.svg' alt='icon' />
        <p>Logout</p>
      </div>
    </nav>
  );
};

export default index;

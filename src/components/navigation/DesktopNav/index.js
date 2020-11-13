import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { auth } from '../../../Firebase/utils';
import { ReactComponent as SearchIcon } from '../../../assets/icon/search.svg';
import { ReactComponent as MingleIcon } from '../../../assets/icon/direct.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/icon/notification.svg';
import { ReactComponent as UserIcon } from '../../../assets/icon/user.svg';
import { ReactComponent as FeedIcon } from '../../../assets/icon/feed.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icon/logout.svg';

//style
import './style.scss';

const DesktopNav = ({ userId }) => {
  return (
    <nav className='desktop-nav'>
      <NavLink exact to='/' className='link' activeClassName='main-nav-active'>
        <FeedIcon />
        <p>Feed</p>
      </NavLink>
      <NavLink to='/chat' className='link' activeClassName='main-nav-active'>
        <MingleIcon />
        <p>Mingle</p>
      </NavLink>
      <NavLink
        to='/notification'
        className='link'
        activeClassName='main-nav-active'>
        <NotificationIcon />
        <p>notification</p>
      </NavLink>
      <NavLink to='/search' className='link' activeClassName='main-nav-active'>
        <SearchIcon />
        <p>Search</p>
      </NavLink>
      <NavLink
        to={`/profile/${userId}`}
        className='link'
        activeClassName='main-nav-active'>
        <UserIcon />
        <p>Profile</p>
      </NavLink>
      <div className='link' onClick={() => auth.signOut()}>
        <LogoutIcon />
        <p>Logout</p>
      </div>
    </nav>
  );
};

export default DesktopNav;

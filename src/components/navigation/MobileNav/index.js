import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../../assets/icon/search.svg';
import { ReactComponent as MingleIcon } from '../../../assets/icon/direct.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/icon/notification.svg';
import { ReactComponent as FeedIcon } from '../../../assets/icon/feed.svg';
import { ReactComponent as AddIcon } from '../../../assets/icon/add.svg';

//style
import './style.scss';
const admin = 'volTozosNrMZJuUCZqvPswYPWzm2';

const MobileNav = () => {
  const allNotifications = useSelector((state) => state.notifications.data);
  const notifications = allNotifications.filter((not) => !not.read);
  const userId = useSelector((state) => state.auth.user.id);
  console.log('hi');
  return (
    <nav className='mobile-nav'>
      <div className='mobile-nav-inner'>
        <NavLink
          exact
          to='/'
          className='link'
          activeClassName='main-nav-active'>
          <FeedIcon />
        </NavLink>
        <NavLink
          to='/search'
          className='link'
          activeClassName='main-nav-active'>
          <SearchIcon />
        </NavLink>
        <a
          href='/#top'
          htmlFor='add-post-input'
          className='link add'
          activeClassName='main-nav-active'>
          <AddIcon />
        </a>
        <NavLink
          to={`/chat/${userId}/${admin}`}
          className='link'
          activeClassName='main-nav-active'>
          <MingleIcon />
        </NavLink>
        <NavLink
          to='/notification'
          className='link'
          activeClassName='main-nav-active'>
          <NotificationIcon />
          {notifications.length > 0 && (
            <p className='notifications-count'>{notifications.length}</p>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;

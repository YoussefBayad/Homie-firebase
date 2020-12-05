import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../../Firebase/utils';
import { ReactComponent as UserIcon } from '../../../assets/icon/user.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icon/logout.svg';

//style
import './style.scss';
import { useSelector } from 'react-redux';

const TopMobileNav = () => {
  const userId = useSelector((state) => state.auth.user.id);

  return (
    <div className='top-mobile-nav'>
      <div className='top-mobile-nav-inner'>
        <NavLink
          to={`/profile/${userId}`}
          className='link'
          activeClassName='main-nav-active'>
          <UserIcon />
        </NavLink>
        <h1 className='title'>Homie</h1>
        <div className='link' onClick={() => auth.signOut()}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default TopMobileNav;

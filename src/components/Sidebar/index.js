import React from 'react';
import UserInfo from '../UserInfo';
import DesktopNav from '../navigation/DesktopNav';

//style
import './style.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1 className='title'>Homie</h1>
      <UserInfo />
      <DesktopNav />
    </div>
  );
};

export default Sidebar;

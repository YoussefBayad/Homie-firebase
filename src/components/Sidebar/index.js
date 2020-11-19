import React from 'react';
import UserInfo from '../UserInfo';
import DesktopNav from '../navigation/DesktopNav';

//style
import './style.scss';
import { useSelector } from 'react-redux';

const Sidebar = React.memo(() => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className='sidebar'>
      <h1 className='title'>Homie</h1>
      <UserInfo user={user} />
      <DesktopNav userId={user.id} />
    </div>
  );
});

export default Sidebar;

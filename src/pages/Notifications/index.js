import React from 'react';
import Notifications from '../../features/notifications';
import './style.scss';

const NotificationsPage = () => {
  return (
    <div className='notifications-page'>
      <h1>Notifications</h1>
      <Notifications />
    </div>
  );
};

export default NotificationsPage;

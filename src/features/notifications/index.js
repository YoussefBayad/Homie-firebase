import React from 'react';
import { useSelector } from 'react-redux';
import Notification from './Notification';
import './style.scss';

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications.data);
  return (
    <div className='notifications'>
      {notifications.map((not) => (
        <Notification key={not.id} {...not} />
      ))}
    </div>
  );
};

export default Notifications;

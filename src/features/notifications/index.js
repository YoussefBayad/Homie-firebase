import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markNotificationsRead } from '../../redux/notificationsSlice';
import Notification from './Notification';
import './style.scss';

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.data);
  let unreadNotificationsIds = notifications
    .filter((not) => !not.read)
    .map((not) => not.id);

  useEffect(() => {
    return () => {
      dispatch(markNotificationsRead(unreadNotificationsIds));
    };
  }, [dispatch, unreadNotificationsIds]);
  return (
    <div className='notifications'>
      {notifications.length === 0 && <p>There is no notifications to show</p>}
      {notifications.map((not) => (
        <Notification key={not.id} {...not} />
      ))}
    </div>
  );
};

export default Notifications;

import useOutsideClickRef from '@rooks/use-outside-click-ref';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Icon } from '../../../assets/icon/notification.svg';
import Notifications from '../../../features/notifications';
import './style.scss';

const NotificationIcon = () => {
  const notifications = useSelector((state) => state.notifications.data);
  const unreadNots = notifications.filter((not) => !not.read);
  const [isOpen, setIsOpen] = useState(false);

  const [ref] = useOutsideClickRef(() => setIsOpen(false));
  return (
    <div className='notifications-icon'>
      <Icon onClick={() => setIsOpen((prev) => !prev)} />
      {unreadNots.length > 0 ? (
        <p className='notifications-count'>{unreadNots.length}</p>
      ) : (
        ''
      )}
      {isOpen && (
        <div ref={ref}>
          {' '}
          <Notifications />
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;

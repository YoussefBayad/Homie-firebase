import useOutsideClickRef from '@rooks/use-outside-click-ref';
import React, { useState } from 'react';
import { ReactComponent as Icon } from '../../../assets/icon/notification.svg';
import Notifications from '../../../features/notifications';
import './style.scss';

const NotificationIcon = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [ref] = useOutsideClickRef(() => setIsOpen(false));
  return (
    <div className='notifications-icon'>
      <Icon onClick={() => setIsOpen((prev) => !prev)} />
      {notifications > 0 ? (
        <p className='notifications-count'>{notifications}</p>
      ) : null}
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

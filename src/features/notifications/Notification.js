import React from 'react';
import UsernameAndDate from '../../components/UsernameAndDate';
import { ReactComponent as LikeIcon } from '../../assets/icon/heart.svg';
import { ReactComponent as CommentIcon } from '../../assets/icon/comment.svg';
import './style.scss';

const Notification = ({
  type,
  postId,
  read,
  senderPhotoURL,
  senderName,
  createdAt,
  sender,
}) => {
  const verb = type === 'like' ? 'liked' : 'commented on';
  const icon = type === 'like' ? <LikeIcon /> : <CommentIcon fill='#4ac75b' />;
  const background = read ? 'lightgrey' : 'grey';
  return (
    <div className={`${background} notification `}>
      <a href={`/#${postId}`}>
        <UsernameAndDate
          id={sender}
          photoURL={senderPhotoURL}
          displayName={senderName}
          createdAt={createdAt}
        />

        <p className='notification-p'>
          {icon}
          {senderName} {verb} your post
        </p>
      </a>
    </div>
  );
};

export default Notification;

import React from 'react';
import AddComment from '../AddComment';
//icons
import avatar from '../../assets/icon/me.jpg';

import { ReactComponent as LikeIcon } from '../../assets/icon/like.svg';
import { ReactComponent as EditIcon } from '../../assets/icon/edit.svg';
import { ReactComponent as CommentIcon } from '../../assets/icon/comment.svg';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';

//style
import './style.scss';

const index = () => {
  return (
    <div className='post'>
      <div className='post-data'>
        <div className='post-header'>
          <div className='circle'>
            <img src={avatar} alt='user' />
          </div>
          <div className='username-and-date'>
            <p className='post-username'>joseph bayad</p>
            <p className='post-date'>1h ago</p>
          </div>
        </div>
        <EditIcon />
      </div>
      <div className='post-body'>
        <p> hello joseph you will do it</p>
      </div>
      <div className='post-interactions'>
        <LikeIcon />
        <CommentIcon />
        <ShareIcon />
      </div>
      <AddComment />
    </div>
  );
};

export default index;

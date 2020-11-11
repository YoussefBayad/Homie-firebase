import React from 'react';
import Button from '../forms/Button';
import avatar from '../../assets/icon/me.jpg';
import { ReactComponent as ImgIcon } from '../../assets/icon/media.svg';

//style
import './style.scss';

const index = () => {
  return (
    <div className='add-post'>
      <div className='circle'>
        <img src={avatar} alt='user' />
      </div>
      <div className='first-row'>
        <textarea placeholder="What's on your mind?" />
        <div className='second-row'>
          <ImgIcon fill=' #fcac46' />
          <Button disable='true'>Post</Button>
        </div>
      </div>
    </div>
  );
};

export default index;

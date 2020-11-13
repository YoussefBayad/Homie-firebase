import React from 'react';
import { ReactComponent as UpArrow } from '../../assets/icon/up-arrow.svg';

import './style.scss';

const index = () => {
  return (
    <a href='#top' className='back-to-top'>
      <UpArrow />
    </a>
  );
};

export default index;

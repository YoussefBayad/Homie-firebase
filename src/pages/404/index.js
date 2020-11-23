import React from 'react';
import { Link } from 'react-router-dom';

//STYLE
import './style.scss';

const FourOFour = () => {
  return (
    <div className='four-o-four'>
      <h1 className='title'>Homie</h1>
      <h1>404</h1>
      <h3>Something's missing</h3>
      <p>The page you looking for was not found</p>
      <Link className='btn' to='/'>
        GO BACK TO FEED
      </Link>
    </div>
  );
};

export default FourOFour;

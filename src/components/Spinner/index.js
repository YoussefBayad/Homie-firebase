import React from 'react';
import { ReactComponent as SpinnerGif } from '../../assets/icon/spinner.svg';

//style
import './style.scss';
const Spinner = ({ ...rest }) => {
  return (
    <div className='spinner' {...rest}>
      <SpinnerGif />
    </div>
  );
};

export default Spinner;

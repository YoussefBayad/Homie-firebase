import React from 'react';
import { ReactComponent as SpinnerGif } from '../../assets/icon/spinner.svg';
const Spinner = ({ ...rest }) => {
  return (
    <div className='spinner' {...rest}>
      <SpinnerGif />
    </div>
  );
};

export default Spinner;

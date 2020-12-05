import React, { useState } from 'react';
import { ReactComponent as ShareIcon } from '../../assets/icon/share.svg';
import useOutsideClickRef from '@rooks/use-outside-click-ref';

//style
import './style.scss';
const Share = ({ sharesCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref] = useOutsideClickRef(() => setIsOpen(false));
  return (
    <>
      <ShareIcon
        ref={ref}
        className='share'
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <p className='count'>{sharesCount}</p>

      {isOpen && (
        <div ref={ref} className='share-modal'>
          <p>This feature is not available right now</p>
        </div>
      )}
    </>
  );
};

export default Share;

import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import ErrorText from '../ErrorText';
import { ReactComponent as AddIcon } from '../../assets/icon/add.svg';
import { ReactComponent as ImgIcon } from '../../assets/icon/media.svg';
//style
import './style.scss';
const UploadForm = ({ svg, setPhotoURL }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form className='upload'>
      <div className='upload-input'>
        <input type='file' onChange={handleChange} />
        {svg === 'add' ? (
          <AddIcon fill=' #fcac46' />
        ) : (
          <ImgIcon fill=' #fcac46' />
        )}
      </div>
      <div className='output'>
        {error && <ErrorText>{error} </ErrorText>}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            setPhotoURL={setPhotoURL}
          />
        )}
      </div>
    </form>
  );
};

export default UploadForm;

import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import ErrorText from '../ErrorText';

//style
import './style.scss';
const UploadForm = () => {
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
      <label>
        <input type='file' onChange={handleChange} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <ErrorText>{error} </ErrorText>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;

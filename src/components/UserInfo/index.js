import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../forms/Button';
import Spinner from '../Spinner';
import * as Yup from 'yup';
import ErrorText from '../ErrorText';

//style
import './style.scss';
import { editUserInfo } from '../../redux/userSlice';
import UploadForm from '../Upload';

const UserInfo = ({ user, setIsEditing, isEditing, showUpload }) => {
  const [photoURL, setPhotoURL] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const postsCount = posts.filter((post) => post.user.id === user.id).length;
  const initialValues = {
    displayName: user.displayName,
    bio: user.bio,
  };

  const validationSchema = Yup.object({
    displayName: Yup.string().required('Username is required'),
    bio: Yup.string().required('Bio is required'),
  });

  const onSubmit = (values, onSubmitProps) => {
    dispatch(
      editUserInfo({
        id: user.id,
        displayName: values.displayName,
        bio: values.bio,
        photoURL: photoURL || user.photoURL,
      })
    );
    onSubmitProps.resetForm();

    setIsEditing(false);
    setPhotoURL(null);
  };
  return (
    <div className='user-info'>
      <Link to={`/profile/${user.id}`}>
        <div className='circle'>
          <img src={user.photoURL} alt='' />
        </div>
      </Link>
      {showUpload && <UploadForm svg='add' setPhotoURL={setPhotoURL} />}
      {!photoURL && !isEditing ? (
        <>
          <h3 className='username'>{user.displayName}</h3>
          <h4 className='bio'>{user.bio}</h4>
        </>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmit}>
          <Form>
            {photoURL && (
              <img className='user-new-img' src={photoURL} alt='user avatar' />
            )}
            <Field
              type='displayName'
              placeholder='Username'
              name='displayName'
            />
            <ErrorMessage component={ErrorText} name='displayName' />
            <Field type='bio' placeholder='Bio...' name='bio' />
            <ErrorMessage component={ErrorText} name='bio' />

            <Button type='submit' className='btn profile-info-save'>
              save
            </Button>
          </Form>
        </Formik>
      )}
      <div className='profile-numbers'>
        <div className='profile-number'>
          <p>{postsCount}</p>
          <p>posts</p>
        </div>
        <div className='profile-number'>
          <p>{user.followersCount}</p>
          <p>followers</p>
        </div>
        <div className='profile-number'>
          <p>{user.followingCount}</p>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

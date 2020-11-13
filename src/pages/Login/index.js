import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authChange } from '../../redux/userSlice';
import ErrorText from '../../components/ErrorText';
import { signInWithGoogle, auth } from '../../Firebase/utils';
import Button from '../../components/forms/Button';
import Label from '../../components/forms/Label';
import avatar from '../../assets/icon/me.jpg';

// style
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const user = useSelector((state) => state.auth.user);

  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };
  if (user) {
    history.replace(from);
  }
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid Email')
      .required('This field is required'),
    password: Yup.string().required('This field is required'),
  });

  const onSubmit = async (values, onSubmitProps) => {
    // try {
    //   await auth.signInWithEmailAndPassword(values.email, values.password);
    //   onSubmitProps.resetForm();
    // } catch (err) {
    //   setError(err.message);
    // }
    dispatch(
      authChange({
        user: {
          displayName: 'joseph bayad',
          photoURL: avatar,
          bio: 'I will make it',
          id: 1,
          postsCount: 27,
          followersCount: '2.5k',
          followingCount: 86,
        },
        loading: false,
        error: null,
      })
    );
  };

  return (
    <div className='login'>
      <h1 className='title'>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={onSubmit}>
        <Form>
          {error && <ErrorText>{error}</ErrorText>}
          <Label htmlFor='email'>Email</Label>
          <Field
            id='email'
            type='email'
            placeholder='Enter your email'
            name='email'
          />
          <ErrorMessage component={ErrorText} name='email' />
          <Label htmlFor='password'>Password</Label>

          <Field
            id='password'
            type='password'
            placeholder='Password'
            name='password'
          />
          <ErrorMessage component={ErrorText} name='password' />

          <Button type='submit'>Login</Button>
        </Form>
      </Formik>

      <Button className='google-login' onClick={() => signInWithGoogle()}>
        Login With Google
      </Button>
      <h4>
        Don't have an account ? <Link to='/signup'>SignUp</Link>{' '}
      </h4>
    </div>
  );
};

export default Login;

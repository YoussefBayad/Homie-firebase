import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  auth,
  handleUserProfile,
  signInWithGoogle,
} from '../../Firebase/utils';
import * as Yup from 'yup';
import ErrorText from '../../components/ErrorText';
import Button from '../../components/forms/Button';
import Label from '../../components/forms/Label';

const Signup = () => {
  const [error, setError] = useState('');

  // formik setup
  const initialValues = {
    displayName: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    displayName: Yup.string().required('This field is required'),
    email: Yup.string()
      .email('invalid email')
      .required('This field is required'),
    password: Yup.string().min(6).required('This field is required'),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {
      // Sign Up
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      const { displayName } = values;
      await handleUserProfile(user, { displayName });
      onSubmitProps.resetForm();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='login'>
      <h1 className='title'>Sign up</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}>
        <Form>
          {error && <ErrorText>{error}</ErrorText>}
          <Label htmlFor='displayName'>Name</Label>
          <Field
            id='displayName'
            type='name'
            placeholder='Enter your name'
            name='displayName'
          />
          <ErrorMessage name='displayName' component={ErrorText} />
          <Label htmlFor='email'>Email</Label>
          <Field
            id='email'
            type='email'
            placeholder='email@example.com'
            name='email'
          />
          <ErrorMessage name='email' component={ErrorText} />
          <Label htmlFor='password'>Password</Label>

          <Field
            id='password'
            type='password'
            placeholder='Password'
            name='password'
          />
          <ErrorMessage name='password' component={ErrorText} />

          <Button type='submit' className='btn'>
            sign up
          </Button>
        </Form>
      </Formik>
      <Button className='google-login' onClick={() => signInWithGoogle()}>
        Sign up With Google
      </Button>
      <h4>
        Already have an account ? <Link to='/login'>Login Now</Link>{' '}
      </h4>
    </div>
  );
};

export default Signup;

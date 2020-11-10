import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { auth, handleUserProfile } from '../Firebase/utils';
import { authChange } from '../redux/User/userSlice';

const useAuthListener = async () => {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);
  if (user) {
    const userRef = await handleUserProfile(user);
    userRef.onSnapshot((snapshot) => {
      dispatch(
        authChange({
          user: {
            id: snapshot.id,
            ...snapshot.data(),
          },
          loading,
          error,
        })
      );
    });
  } else {
    dispatch(
      authChange({
        user,
        loading,
        error,
      })
    );
  }
};

export default useAuthListener;

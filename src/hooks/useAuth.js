import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    } else {
      if (
        history.location.pathname === '/login' ||
        history.location.pathname === '/signup'
      )
        history.push('/');
      else history.push(history.location.pathname);
    }
  }, [currentUser, history]);

  return true;
};

export default useAuth;

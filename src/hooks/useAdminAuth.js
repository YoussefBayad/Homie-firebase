import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//check is  Admin

export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;
  if (userRoles.includes('admin')) return true;

  return false;
};

//use admin Hook

const useAdminAuth = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      history.push('/login');
    }
  }, [currentUser, history]);

  return currentUser;
};

export default useAdminAuth;

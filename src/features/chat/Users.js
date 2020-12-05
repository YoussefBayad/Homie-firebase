import React, { useEffect } from 'react';
import Spinner from '../../components/Spinner';

//style
import './style.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/usersSlice';

const Users = () => {
  const users = useSelector((state) => state.users.data);
  const currentUserId = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);
  return (
    <div className='chat-users'>
      {!users ||
        (users.length === 0 && <Spinner style={{ margin: '15rem auto' }} />)}
      {users &&
        users.length > 0 &&
        users
          .filter((user) => user.id !== currentUserId)
          .map((user) => (
            <NavLink
              to={`/chat/${currentUserId}/${user.id}`}
              className='chat-user'
              activeClassName='chat-nav-active'>
              <div className='circle'>
                <img src={user.photoURL} title={user.displayName} alt='user' />
              </div>
              <user className='name'>{user.displayName}</user>
            </NavLink>
          ))}
    </div>
  );
};

export default React.memo(Users);

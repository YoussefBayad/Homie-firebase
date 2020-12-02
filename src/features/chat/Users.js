import React, { useEffect } from 'react';
import { db } from '../../Firebase/utils';
import Spinner from '../../components/Spinner';

//style
import './style.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Users = () => {
  const [users, setUsers] = useState(null);
  const currentUserId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    fetchUsers(setUsers);

    return () => {};
  }, []);
  return (
    <div className='chat-users'>
      {!users && <Spinner />}
      {users &&
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

const fetchUsers = async (setState) => {
  const data = [];
  const collection = await db.collection('users').get();

  collection.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  setState(data);
};

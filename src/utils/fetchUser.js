import { db } from '../Firebase/utils';

const fetchUser = async (id) => {
  const user = await db.collection('users').doc(id).get();
  return user;
};

export default fetchUser;

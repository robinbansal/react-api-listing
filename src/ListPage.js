import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, selectUser } from './actions';
import { getUsers } from './api';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log("inside list page", users)
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
    console.log("inside list page useEffect", data)
      dispatch(setUsers(data));
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/details/${user.id}`} onClick={() => dispatch(selectUser(user.id))}>
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;

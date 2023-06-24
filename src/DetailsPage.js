import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './api';
import { setUsers } from './actions';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const selectedUserId = useSelector((state) => state.selectedUserId);
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === selectedUserId);
  console.log("inside details page", users, user)
 
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
    console.log("inside details page useEffect", data)
      dispatch(setUsers(data));

      // callAction(data);
    };

    fetchUsers();
  }, [dispatch]);

  // const callAction = (data) =>{
  //   dispatch(data)
  // }

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <img src={user.avatar} alt="Avatar" />
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/users';
import './User.css';

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      console.log('RES', res.data);
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  console.log('USERS', users);

  return (
    <>
      <h2>Users</h2>
      {users?.map((user, index) => (
        <Link to={`/users/${user.id}`} key={index} className='userCard'>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{`${user.address.suite} ${user.address.street} ${user.address.city}`}</p>
          <p>{`${user.company.name}`}</p>
        </Link>
      ))}
    </>
  );
};

export default Users;

import React, { useState, useEffect } from 'react';
import User from './user';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/slices-actions';

const UserList = ({ handleDeleteUser, hoveredUserId, handleMouseEnter, handleMouseLeave }) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers2 = async () => {
      setIsLoading(true);
      try {
        const fetchedUsers = await dispatch(fetchUsers());
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers2();
  }, [dispatch]);

  return (
    <ul>
      {isLoading ? (
        <li>Ładowanie...</li>
      ) : (
        users.map((user) => (
          <User
            key={user.id}
            user={user}
            hoveredUserId={hoveredUserId}
            handleDeleteUser={handleDeleteUser}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))
      )}
    </ul>
  );
};

export default UserList;

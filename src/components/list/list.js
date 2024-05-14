import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../UI/user';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/slices-actions';

const UserList = ({ handleDeleteUser, hoveredUserId, handleMouseEnter, handleMouseLeave }) => {
  const dispatch = useDispatch();
  const [users2, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers2();
  }, [dispatch]);

  const fetchUsers2 = async () => {
    setIsLoading(true);
    try {
      setUsers(await dispatch(fetchUsers()));
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ul>
      {isLoading ? (<p>Ładowanie...</p>) : (
        users2.map((user) => (
          <User key={user.id} user={user} hoveredUserId={hoveredUserId} handleDeleteUser={handleDeleteUser} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
        ))
      )}
    </ul>
  );
};

export default UserList;

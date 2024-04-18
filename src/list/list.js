import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../UI/user';


const UserList = ({ handleDeleteUser, hoveredUserId, handleMouseEnter, handleMouseLeave }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Ładowanie...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <User key={user.id} user={user} hoveredUserId={hoveredUserId} handleDeleteUser={handleDeleteUser} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;

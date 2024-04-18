import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './form/form';
import UserList from './list/list';
import Search from './search_user/search_user';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hoveredUserId, setHoveredUserId] = useState(null);
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

  const AddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/add', { Name: name, Password: password });
      setName('');
      setPassword('');
      fetchUsers();
    } catch (error) {
      console.log('Błąd podczas dodawania użytkownika:', error);
    }
  };

  const DelUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Błąd podczas usuwania użytkownika:', error);
    }
  };

  const handleMouseEnter = (userId) => {setHoveredUserId(userId)};
  const handleMouseLeave = () => {setHoveredUserId(null)};

  return (
    <div>
      <header>Lista użytkowników</header>
      <Form name={name} password={password} onNameChange={setName} onPasswordChange={setPassword} onSubmit={AddUser} />
      <UserList users={users} handleDeleteUser={DelUser} hoveredUserId={hoveredUserId} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isLoading={isLoading} />
      <Search/>
    </div>
  );
};

export default App;

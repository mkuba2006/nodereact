import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/form/form';
import UserList from './components/list/list';
import Search from './components/search_user/search_user';
import { Link } from '@chakra-ui/react';
import { fetchUsers } from './store/slices-actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hoveredUserId, setHoveredUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers2 = async () => {
    setIsLoading(true);
    try {
      const response = await dispatch(fetchUsers());
      setUsers(await dispatch(fetchUsers()));
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
      fetchUsers2();
    } catch (error) {
      console.log('Błąd podczas dodawania użytkownika:', error);
    }
  };

  const DelUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/users/${userId}`);
      fetchUsers2();
    } catch (error) {
      console.error('Błąd podczas usuwania użytkownika:', error);
    }
  };

  const handleMouseEnter = (userId) => {setHoveredUserId(userId)};
  const handleMouseLeave = () => {setHoveredUserId(null)};



  return (
    <div>
      <header>
        Lista użytkowników
        <Link to='/Form'>Add User</Link>
        <Link to='/UserList'>List</Link>
        <Link to='/Search'>Search</Link>
      </header>
      <Form name={name} password={password} onNameChange={setName} onPasswordChange={setPassword} onSubmit={AddUser} />
      <UserList users={users} handleDeleteUser={DelUser} hoveredUserId={hoveredUserId} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isLoading={isLoading} />
      <Search/>
    </div>
  );
};

export default App;

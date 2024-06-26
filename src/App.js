import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/form/form';
import UserList from './components/list/list';
import { fetchUsers, Add_User } from './store/slices-actions';
import { useDispatch } from 'react-redux';
import './App.css'


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
      await dispatch(fetchUsers());
      setUsers(await dispatch(fetchUsers()));
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const AddUser = async (e) => {
    e.preventDefault();
    if(name.length >= 7 && password.length >= 7 ){
      try {
        await dispatch(Add_User(name, password));
      } catch (error) {
        console.log('Błąd podczas dodawania użytkownika:', error);
      }
    }else{
      console.error("name and password must be longer than 6")
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
    <div id='App'>
      <Form name={name} password={password} onNameChange={setName} onPasswordChange={setPassword} onSubmit={AddUser} />
      <UserList users={users} handleDeleteUser={DelUser} hoveredUserId={hoveredUserId} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isLoading={isLoading} />
    </div>
  );
};

export default App;

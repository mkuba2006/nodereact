import React, { useState, useEffect } from 'react';
import { Input, Button, Box, Text, Alert, AlertIcon, List } from '@chakra-ui/react';
import axios from 'axios';
import Task from './tasks';
import AddTask from './add_task';
import { useDispatch, useSelector } from 'react-redux';
import { moze } from '../../store/slices-actions';
import './search.css'



const Search = () => {
  const dispatch = useDispatch();
  const { res } = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [see, setSee] = useState(false);

  useEffect(() => {
    if (searchResult && name) {
      fetchTasks();
    }
  }, [searchResult]);

  const toggleSee = () => setSee((prev) => !prev);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/tasks?name=${name}`);
      setTasks(response.data);
    } catch (err) {
      setError('Nie udało się pobrać zadań.');
    }
  };

  const handleAddTask = async (newTask) => {
    const { title, description } = newTask;
    try {
      const params = { name, password, title, description, id: searchResult?.id };
      const response = await axios.get(`http://localhost:4000/addtask`, { params });
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Nie udało się dodać zadania.');
    }
    fetchTasks();
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const actionResult = await dispatch(moze(name, password));
      setSearchResult(actionResult);
      setError(null);
    } catch (err) {
      setSearchResult(null);
      setError('Nie udało się znaleźć użytkownika.');
    }
  };

  return (
    <div id='search'>
      <form onSubmit={submit} id='search_form'>
        <h1 id='tytul'>Search User</h1>
        <Input variant='outline' placeholder='Name' id='s_inp' value={name} onChange={(e) => setName(e.target.value)} />
        <Input variant='outline' placeholder='Password' id='s_inp' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" colorScheme='green'>Search</Button>
      </form>

      {error && (
        <Alert status="error" mt={4} fontSize='md' width={'350px'}>
          <AlertIcon />{error}
        </Alert>
      )}

      {searchResult && (
        <Box mt={4}>
          <Text>User found: <b> {searchResult.Name}</b></Text>
          <AddTask onAddTask={handleAddTask} />
          <Button key={name} onClick={toggleSee}>Tasks</Button> 
          {see && (
            <List>
              {tasks.map((task) => (
                <Task key={Math.random()} task={task} />
              ))}
            </List>
          )}
        </Box>
      )}
    </div>
  );
};

export default Search;

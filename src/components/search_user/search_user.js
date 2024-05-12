import React, { useState, useEffect } from 'react';
import { Input, Button, Box, Text, Alert, AlertIcon, List } from '@chakra-ui/react';
import axios from 'axios';
import Task from './tasks';
import AddTask from './add_task';
import { useDispatch,useSelector } from 'react-redux';
import { Slice } from '../../store/slices'
import { moze } from '../../store/slices-actions';



const Search = () => {
  const dispatch = useDispatch();
  const x = useSelector((state) => state.user.res.Name);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [see, setsee] = useState(false);
  useEffect(() => {
    if (searchResult && name) {
      fetchTasks();
    }
  }, [searchResult, name]);

  const seeTasks = () => {
    setsee(prev=>!prev)
  };
  

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
      const params = { name, password, title, description };
      if (searchResult && searchResult.id) { params.id = searchResult.id};
      const response = await axios.get(`http://localhost:4000/addtask`, { params });
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Nie udało się dodać zadania.');
    }
    fetchTasks();
  };

  const submit = async (e) => {
    e.preventDefault();
    dispatch(moze(name, password));
    console.log(x);

    try {
      const response = await axios.get(`http://localhost:4000/search?name=${name}&password=${password}`);
      setSearchResult(response.data);
      setError(null);
    } catch (err) {
      setSearchResult(null);
      setError('Nie udało się znaleźć użytkownika.');
    }
  };

  return (
    <div>
      <form onSubmit={submit} id='search_form'>
        <h1>Search User</h1>
        <Input variant='outline' placeholder='Name' id='s_inp' value={name} onChange={(e) => setName(e.target.value)} width={'220px'} />
        <Input variant='outline' placeholder='Password' id='s_inp2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} width={'220px'} />
        <Button type="submit" colorScheme='green'>Search</Button>
      </form>

      {error && (
        <Alert status="error" mt={4} width={'350px'}>
          <AlertIcon />
          {error}
        </Alert>
      )}

      {searchResult && (
        <Box mt={4}>
          <Text>User found: {searchResult.id} {searchResult.Name}</Text>
          <AddTask onAddTask={handleAddTask} />
          <Button key={name} onClick={seeTasks}>Tasks</Button> 
          {see && (
            <List>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </List>
          )}
        </Box>
      )}
    </div>
  );
};

export default Search;

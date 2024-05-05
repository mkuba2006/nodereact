import React, { useState } from 'react';
import { Input, Button, Box, Text, Alert, AlertIcon, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';
import './search.css';
import Task from './tasks';
import AddTask from './add_task';

const Search = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [x, setX] = useState([]);

  const handleAddTask = async (newTask) => {
    const { title, description } = newTask;
    try {
      const params = { name, password, title, description };
      if (searchResult && searchResult.id) { params.id = searchResult.id};
      const response = await axios.get(`http://localhost:4000/addtask`, { params });
      setX(response.data);
      console.log('response.data', response.data);
      console.log(tasks.length);
    } catch (err) {
      setError('Nie udało się pobrać zadań.');
    }
  };



  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:4000/search?name=${name}&password=${password}`);
      setSearchResult(response.data);
      setError(null);
    } catch (err) {
      setSearchResult(null);
      setError('Nie udało się znaleźć użytkownika.');
    }
  };

  const seeTasks = async (e) => {
    e.preventDefault();
    console.log("id:", searchResult.id);
    console.log("tasks", tasks)
    console.log("name", name)
    try {
      const response = await axios.get(`http://localhost:4000/tasks?name=${name}`);
      setTasks(response.data);
      console.log('response.data', response.data);
      console.log(tasks.length);
    } catch (err) {
      setError('Nie udało się pobrać zadań.');
    }
  };

  return (
    <div>
      <form onSubmit={submit} id='search_form'>
        <h1>Search User</h1>
        <Input variant='outline' placeholder='Name' id='s_inp' value={name} onChange={(e) => setName(e.target.value)} />
        <Input variant='outline' placeholder='Password' id='s_inp2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
          <Button key={name} onClick={seeTasks}>tasks</Button>
          <AddTask onAddTask={handleAddTask} />
          {tasks.length > 0 && (
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

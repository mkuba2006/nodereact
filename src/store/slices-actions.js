import { Slice } from './slices';
import axios from 'axios';

export const moze = (name, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/search?name=${name}&password=${password}`);
      dispatch(Slice.find({ user_value: 'works', res: response.data }));
      return response.data; 
    } catch (err) {
      console.log(err);
      throw err; 
    }
  };
};



export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:4000/users');
      dispatch(Slice.fetch_Users({users: response.data}));
      return response.data; 
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
      return 'error'; 
    }
  };
};


export const Add_User = (name, password) => {
  return async (dispatch) =>{
    try {
      const response = await axios.post('http://localhost:4000/add', { Name: name, Password: password });
      dispatch(Slice.add_user({users: response.data}));
      return {name, password};
    } catch (error) {
      console.log('Błąd podczas dodawania użytkownika:', error);
    }
  }
};





// const AddUser = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.post('http://localhost:4000/add', { Name: name, Password: password });
//     setName('');
//     setPassword('');
//     fetchUsers2();
//   } catch (error) {
//     console.log('Błąd podczas dodawania użytkownika:', error);
//   }
// };


// const fetchTasks = async () => {
//   try {
//     const response = await axios.get(`http://localhost:4000/tasks?name=${name}`);
//     setTasks(response.data);
//   } catch (err) {
//     setError('Nie udało się pobrać zadań.');
//   }
// };
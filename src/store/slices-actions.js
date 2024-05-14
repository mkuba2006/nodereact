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





// const fetchTasks = async () => {
//   try {
//     const response = await axios.get(`http://localhost:4000/tasks?name=${name}`);
//     setTasks(response.data);
//   } catch (err) {
//     setError('Nie udało się pobrać zadań.');
//   }
// };
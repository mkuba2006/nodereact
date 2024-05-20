import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  res: null, 
  users: null,
};

const search = createSlice({
  name: 'search_user',
  initialState: initialCounterState,
  reducers: {
    find: (state, action) => {
      const { user_value, res } = action.payload;
      state.res = res;
      console.log("res:", res);
    },
    fetch_Users: (state, action) => {
      const { users } = action.payload;
      state.users = users; 
      console.log("users:", users);
    },
    add_user: (state, action) => {
      const { users } = action.payload;
      state.users = users; 
      console.log("users:", users);
    }
  },
});

export const Slice = search.actions;
export default search;








// const fetchTasks = async () => {
//   try {
//     const response = await axios.get(`http://localhost:4000/tasks?name=${name}`);
//     setTasks(response.data);
//   } catch (err) {
//     setError('Nie udało się pobrać zadań.');
//   }
// };
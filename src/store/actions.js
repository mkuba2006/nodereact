// // actions/userActions.js

// import axios from 'axios';

// export const fetchUsersRequest = () => {
//   return {
//     type: 'FETCH_USERS_REQUEST'
//   };
// };

// export const fetchUsersSuccess = (users) => {
//   return {
//     type: 'FETCH_USERS_SUCCESS',
//     payload: users
//   };
// };

// export const fetchUsersFailure = (error) => {
//   return {
//     type: 'FETCH_USERS_FAILURE',
//     payload: error
//   };
// };

// export const addUserRequest = () => {
//   return {
//     type: 'ADD_USER_REQUEST'
//   };
// };

// export const addUserSuccess = () => {
//   return {
//     type: 'ADD_USER_SUCCESS'
//   };
// };

// export const addUserFailure = (error) => {
//   return {
//     type: 'ADD_USER_FAILURE',
//     payload: error
//   };
// };

// export const deleteUserRequest = () => {
//   return {
//     type: 'DELETE_USER_REQUEST'
//   };
// };

// export const deleteUserSuccess = (userId) => {
//   return {
//     type: 'DELETE_USER_SUCCESS',
//     payload: userId
//   };
// };

// export const deleteUserFailure = (error) => {
//   return {
//     type: 'DELETE_USER_FAILURE',
//     payload: error
//   };
// };

// export const fetchUsers = () => {
//   return async (dispatch) => {
//     dispatch(fetchUsersRequest());
//     try {
//       const response = await axios.get('http://localhost:4000/users');
//       dispatch(fetchUsersSuccess(response.data));
//     } catch (error) {
//       dispatch(fetchUsersFailure(error.message));
//     }
//   };
// };

// export const addUser = (userData) => {
//   return async (dispatch) => {
//     dispatch(addUserRequest());
//     try {
//       await axios.post('http://localhost:4000/add', userData);
//       dispatch(addUserSuccess());
//       dispatch(fetchUsers()); // Pobierz zaktualizowaną listę użytkowników po dodaniu nowego
//     } catch (error) {
//       dispatch(addUserFailure(error.message));
//     }
//   };
// };

// export const deleteUser = (userId) => {
//   return async (dispatch) => {
//     dispatch(deleteUserRequest());
//     try {
//       await axios.delete(`http://localhost:4000/users/${userId}`);
//       dispatch(deleteUserSuccess(userId));
//     } catch (error) {
//       dispatch(deleteUserFailure(error.message));
//     }
//   };
// };

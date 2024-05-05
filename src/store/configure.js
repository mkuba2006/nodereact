// // reducers/userReducer.js

// const initialState = {
//     users: [],
//     isLoading: false,
//     error: null,
//   };
  
//   const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'FETCH_USERS_REQUEST':
//       case 'ADD_USER_REQUEST':
//       case 'DELETE_USER_REQUEST':
//         return {
//           ...state,
//           isLoading: true,
//           error: null
//         };
//       case 'FETCH_USERS_SUCCESS':
//         return {
//           ...state,
//           isLoading: false,
//           users: action.payload,
//           error: null
//         };
//       case 'ADD_USER_SUCCESS':
//       case 'DELETE_USER_SUCCESS':
//         return {
//           ...state,
//           isLoading: false,
//           error: null
//         };
//       case 'FETCH_USERS_FAILURE':
//       case 'ADD_USER_FAILURE':
//       case 'DELETE_USER_FAILURE':
//         return {
//           ...state,
//           isLoading: false,
//           error: action.payload
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default userReducer;
  
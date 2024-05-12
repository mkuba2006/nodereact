import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  res: null, 
};

const search = createSlice({
  name: 'search_user',
  initialState: initialCounterState,
  reducers: {
    find: (state, action) => {
      const { user_value, res } = action.payload;
      state.res = res;
      console.log("res:",res);
    },
  },
});

export const Slice  = search.actions;
export default search;

import { Slice } from './slices';
import axios from 'axios';

export const moze = (name, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/search?name=${name}&password=${password}`);
      dispatch(Slice.find({ user_value: 'works', res: response.data }));
    } catch (err) {
      console.log(err);
    }
    
  };
};

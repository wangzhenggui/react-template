import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/Home/counterSlice';
import userReducer from './user/slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

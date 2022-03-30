import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/Home/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'store/user/slice';
import counterReducer from '../pages/Home/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

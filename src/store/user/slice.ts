import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type UserState = Pick<API.CurrentUser, 'name' | 'avatar' | 'address'>;
type UserRootState = {
  userInfo: UserState;
};
const initialState: UserRootState = {
  userInfo: {},
};
export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userInfo = action.payload;
    },
  },
});

export const selectUserInfo = (state: RootState) => state.user.userInfo;

export const { setUser } = counterSlice.actions;

export default counterSlice.reducer;

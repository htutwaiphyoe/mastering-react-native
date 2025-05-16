import {createSlice} from '@reduxjs/toolkit';
import users from '@/assets/data/users.json';

type UserState = {
  users: typeof users;
};

const initialState: UserState = {
  users,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

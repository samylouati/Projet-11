import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: '',
  firstName: '',
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    updateUser: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      state.firstName = '';
      state.lastName = '';
    }
  }
});

export const { setUser, updateUser, logout } = userSlice.actions;
export default userSlice.reducer;

// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: '',
  firstName: '', // Utilise firstName plutôt que name
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.firstName = action.payload.firstName; // Met à jour firstName
      state.lastName = action.payload.lastName;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      state.firstName = ''; // Réinitialise firstName
      state.lastName = '';
    }
  }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

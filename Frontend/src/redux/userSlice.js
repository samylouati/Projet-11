// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isLoggedIn: false,
    name: '' // Ajouter un champ pour le nom de l'utilisateur
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.name = action.payload.name; // Stocker le nom de l'utilisateur
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.name = '';
    }
  }
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;

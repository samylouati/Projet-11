import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//variable pour API 
const API_BASE_URL = "http://localhost:3001/api/v1";
console.log(API_BASE_URL);


// Thunk pour la connexion
export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Identifiant incorrect');
  }

  const data = await response.json();
  console.log(data);
  return data;
});

// Thunk pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (token) => {
  const response = await fetch(`${API_BASE_URL}/user/profile`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  const data = await response.json();
  return data; // Cela devrait contenir les informations de l'utilisateur, y compris l'userId
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token; // ou action.payload.userId si directement disponible
        state.user = action.payload.userId ? { id: action.payload.userId } : null; // Stocke l'userId si disponible
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload; // Stocke les informations complètes de l'utilisateur
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
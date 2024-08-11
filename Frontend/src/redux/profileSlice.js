//afin de pouvoir gerer independament des données 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = "http://localhost:3001/api/v1";

// Thunk pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk('profile/fetchUserProfile', async (token) => {
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
  return data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;

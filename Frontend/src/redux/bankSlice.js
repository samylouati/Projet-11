import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Variable pour API
const API_BASE_URL_ = "http://localhost:3001/api/v1";

// Action asynchrone pour récupérer les comptes
export const fetchAccounts = createAsyncThunk('bank/fetchAccounts', async (userId) => {
  console.log("User ID recu:", userId) //Pour verifier si l'id utilisateur est bien recu
  
  const response = await fetch(`${API_BASE_URL_}/accounts/${userId}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
});

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    accounts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accounts = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bankSlice.reducer;

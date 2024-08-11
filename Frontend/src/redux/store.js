import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/userSlice';
import bankReducer from '../redux/bankSlice';
import profilReducer from './profileSlice';

export const store = configureStore ({
  reducer: {
    auth: authReducer,
    bank: bankReducer,
    profile: profilReducer,
  },
});

export default store;

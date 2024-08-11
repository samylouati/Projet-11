import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/authSlice';
import bankReducer from '../redux/bankSlice';

export const store = configureStore ({
  reducer: {
    auth: authReducer,
    bank: bankReducer,
  },
});

export default store;

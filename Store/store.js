// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';
import postSlice from './authSignup'
import OtpSlice from './authOtp'
import PasswordSlice from './authSetPassword'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    post: postSlice,
    otp: OtpSlice,
    pass: PasswordSlice
  },
});
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducers/errorSlice';
import loginReducer from './reducers/loginSlice';

export default configureStore({
  reducer: {
    errorState: errorReducer,
    loginState: loginReducer,
  },
});

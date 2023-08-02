// import { StoreCreator, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducers/errorSlice';
import loginReducer from './reducers/loginSlice';

export default configureStore({
  reducer: {
    errorState: errorReducer,
    loginState: loginReducer,
  },
});

// import { StoreCreator, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducers/error';

export default configureStore({
  reducer: {
    error: errorReducer,
  },
});

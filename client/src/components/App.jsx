import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addError, removeError } from '../store/reducers/error';

// import api from '../services/api';

const App = () => {
  const errorState = useSelector(state => state.error.message);
  const dispatch = useDispatch();

  const setGlobalandLocal = () => {
    dispatch(addError({ message: 'errors loding crap' }));
  };

  const removeGlobalandLocal = () => {
    dispatch(removeError());
  };

  const asyncSetGlobalandLocal = () => {
    dispatch(addError({ message: 'errors loding crap' }));
  };

  const asyncRemoveGlobalandLocal = () => {
    dispatch(removeError());
  };
  return (
    <div>
      <h1>App workd</h1>
      <button onClick={setGlobalandLocal}>set Error</button>
      <h2>To error?: {errorState.message}</h2>
      <button onClick={removeGlobalandLocal}>remove Error</button>
      <br />
      <br />
      <button>async set error</button>
    </div>
  );
};

export default App;

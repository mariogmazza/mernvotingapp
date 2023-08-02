import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addError, removeError } from '../store/reducers/errorSlice';
import { fetchUserLogin } from '../store/reducers/loginSlice';
import { displayCurrentUser } from '../store/reducers/loginSlice';

const App = () => {
  const errorState = useSelector(store => store.errorState.message);
  const isLoading = useSelector(store => store.loginState.isLoading);
  const currentUser = useSelector(store => store.loginState.currentUser);
  const dispatch = useDispatch();

  const setGlobalandLocal = () => {
    dispatch(addError({ message: 'errors loding crap' }));
  };

  const removeGlobalandLocal = () => {
    dispatch(removeError());
  };

  const asyncLogin = () => {
    dispatch(fetchUserLogin({ username: 'kelvin', password: 'password' }));
  };

  return (
    <div>
      <h1>App workd</h1>
      <button onClick={setGlobalandLocal}>set Error</button>
      <h2>To error?: {errorState.message}</h2>
      <button onClick={removeGlobalandLocal}>remove Error</button>
      <br />
      <br />
      <button onClick={asyncLogin}>Async Login</button>
      {isLoading ? (
        <div>
          <h2>Hey I am loading...</h2>
        </div>
      ) : (
        <h2>{currentUser}</h2>
      )}
      <hr />
      <br />
      <button onClick={() => dispatch(displayCurrentUser())}>
        mod current user
      </button>
    </div>
  );
};

export default App;

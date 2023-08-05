import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addError, removeError } from '../store/reducers/errorSlice';
import { fetchUserLogin } from '../store/reducers/loginSlice';

const App = () => {
  const errorState = useSelector(store => store.errorState.message);
  const isLoading = useSelector(store => store.loginState.isLoading);
  const currentUser = useSelector(store => store.loginState.currentUser);
  const dispatch = useDispatch();

  const setGlobalandLocal = () => {
    // dispatch(addError({ message: 'errors loding crap' }));
    dispatch(addError(errorState));
  };

  const removeGlobalandLocal = () => {
    dispatch(removeError());
  };

  const asyncLogin = () => {
    const data = { username: 'kelvin', password: 'password' };
    dispatch(fetchUserLogin(data));
  };

  return (
    <div>
      <h1>App workd</h1>
      <button onClick={setGlobalandLocal}>set Error</button>
      <h2>To error?: {errorState}</h2>
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
    </div>
  );
};

export default App;

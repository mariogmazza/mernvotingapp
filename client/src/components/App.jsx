import React, { useEffect, useState } from 'react';
import api from '../services/api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = api.call('post', 'auth/login', {
      username: 'username',
      password: 'password',
    });

    console.log(results);
  }, []);

  return <div>App workd</div>;
};

export default App;

import React, { useEffect, useState } from 'react';
import api from '../services/api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = api.call('post', 'auth/login', {
      username: 'username',
      password: 'password',
    });
    setData(results)

    console.log(typeof results);
  }, []);


  return <div>
    <h1>App workd</h1>
      <div>This is data: {data.username? data.username : 'nada'}</div>
      
      </div>;
};

export default App;

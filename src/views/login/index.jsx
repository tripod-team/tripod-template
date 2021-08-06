import React from 'react';
import { Redirect } from 'react-router-dom';

import './styles.css';

const Login = () => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  if (isLogin) {
    return <Redirect to="/app" />;
  }

  return (
    <div>
      <h2>Login Page</h2>
    </div>
  );
};

export default Login;

import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

const App = () => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));

  return (
    <Router>
      {renderRoutes(routes)}
      {!isLogin && <Redirect to="/login" />}
    </Router>
  )
};

export default App;

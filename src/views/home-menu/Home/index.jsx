import React from 'react';
import { renderRoutes } from 'react-router-config';

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Home Layout</h2>
      {renderRoutes(props.route.routes)}
    </div>
  )
};

export default Home;

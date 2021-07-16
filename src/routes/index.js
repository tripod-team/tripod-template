import Login from '../views/login';
import Home from '../views/home-menu/Home';
import Map from '../views/home-menu/Map';

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   render: () =>  <Redirect to="/login" />
  // },
  {
    path: '/app',
    component: Home,
    routes: [
      {
        path: '/app/map',
        component: Map
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
];

export default routes;

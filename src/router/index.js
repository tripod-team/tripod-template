import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import HomePage from 'views/home-menu/Map';
import SecondPage1 from 'views/second-menu/SecondPage1';
import ThirdPage1 from 'views/third-menu/ThirdPage1';

const routes = [];
const routeFiles = require.context('../views/second-menu', true, /\.jsx?$/) // 读取views文件夹下面所有的.jsx文件
console.dir(routeFiles)
routeFiles.keys().forEach(item => {
  console.log(item)
  if (item.indexOf('component') === -1) { // component下面为子组件不需要注册路由
    let info = item.split('.')
    console.log(info)
    routes.push({
      path: info[1].toLowerCase(),
      component: routeFiles(item).default
    })
  }
});
console.log(routes);

const PrimaryLayout = () => (
  <div>
    <header>
      {
        routes.map(route => (
          <Link key={route.path} to={route.path}>{route.path.split('/')[1]}</Link>
        ))
      }
      {/* <Link to="/"> toHome </Link>
      <Link to="/second"> toSecond </Link>
      <Link to="/third"> toThird </Link> */}
    </header>
    <main>
      <Switch>
        {
          routes.map(route => (
            <Route exact key={route.path} {...route} />
          ))
        }
        {/* <Route path="/" exact component={HomePage} />
        <Route path="/second" component={SecondPage1} />
        <Route path="/third" component={ThirdPage1} /> */}
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
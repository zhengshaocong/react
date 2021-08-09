import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import List from './pages/admin/products/List';
import {mainRoutes} from './routes'
import 'antd/dist/antd.css'
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={(routeProps) => <App {...routeProps}></App>}></Route>
      {
        mainRoutes.map((route) => (<Route key={route.path} {...route}></Route>))
      }
      <Redirect from="/" to={mainRoutes[0].path}></Redirect>
      <Redirect to="/404"></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

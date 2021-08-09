import logo from './logo.svg';
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {adminRoutes} from './routes'
import Frame from './components/Frame/index'
import {isLogined} from './utils/auth'
import './styles/index.scss';
function App () {
  return isLogined() ? (
    <Frame>
      <Switch>
        {
          adminRoutes.map((route) => <Route key={route.path} path={route.path} exact={route.exact} render={
            (routeProps) => <route.component {...routeProps}></route.component>
          }></Route>)
        }
        <Redirect from="/admin" to={adminRoutes[0].path}></Redirect>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Frame>
  ) : <Redirect to="/login"></Redirect>
}

export default App;

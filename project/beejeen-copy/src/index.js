import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { mainRoutes } from './routes';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {Provider} from 'react-redux'
function create () {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/admin" render={(routerProps) => <App {...routerProps} />} />
          {
            mainRoutes.map((route) => (<Route key={route.path} {...route} />))
          }
          <Redirect from="/" to={mainRoutes[0].path} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}

create()
// store.subscribe(() => {
//   create()
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

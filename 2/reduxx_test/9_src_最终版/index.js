import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>{/*让APP的后代容器组件都能接收到store*/}
      <App/>
  </Provider>,
  document.getElementById('root')
)

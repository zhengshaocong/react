import React, { Component } from 'react'
import Count from './components/NewCount'
export default class App extends Component {
  render() {
    return (
      <div>
        {/*给容器组件添加store*/}
        <Count  xxx="222"></Count>
      </div>
    )
  }
}


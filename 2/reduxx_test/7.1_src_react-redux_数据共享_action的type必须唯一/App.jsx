import React, { Component } from 'react'
import Count from './components/NewCount'
import Person from './components/Person'
import AllData from './components/AllData'
export default class App extends Component {
  render() {
    return (
      <div>
        {/*给容器组件添加store*/}
        <Count  xxx="222"></Count>
        <hr/>
        <Person></Person>
        <hr/>
        <AllData></AllData>
      </div>
    )
  }
}


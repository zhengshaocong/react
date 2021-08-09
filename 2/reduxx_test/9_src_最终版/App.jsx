import React, { Component } from 'react'
import Count from './components/NewCount'
import Person from './components/Person'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count  xxx="222"></Count>
        <hr/>
        <Person></Person>
      </div>
    )
  }
}


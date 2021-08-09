import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createIncrementAction} from '../../redux/Count/action'
 class NextCount extends Component {
     add=()=>{
         this.props.increment(1)
     }
    render() {
        return (
            <div>
                <h2>当前求和为{this.props.count}</h2>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}

export default connect(state=>({
    count:state
}),{
    increment:createIncrementAction
})(NextCount)

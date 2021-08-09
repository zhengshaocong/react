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
                <h2>当前求和为{this.props.he}</h2>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}

export default connect(state=>({
    he:state
}),{
    increment:createIncrementAction
})(NextCount)

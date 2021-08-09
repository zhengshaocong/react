import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    createIncrementAsyncAction,
    createDecrementAction,
    createIncrementAction
} from '../../redux/Count/action'
class Count extends Component {
    state={
    }
    increment=()=>{
        const {value}=this.selectNumber
        this.props.increment(value*1)
    }
    decrement=()=>{
        const {value}=this.selectNumber
        this.props.decrement(value*1)
    }
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
        if(this.props.count%2!==0){
            this.props.increment(value*1)
        }
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
        this.props.incrementAsync(value*1,500)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.other}</p>
            <h1>当前求和为{this.props.count}</h1>
            <p>下方人数{this.props.person}</p>
            <select ref={c=>this.selectNumber=c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
            <button onClick={this.incrementAsync}>异步加</button>
          </div>
        )
    }
}

export default connect(state=>({
    count:state.he,
    person:state.rens.length,
    other:state.all
}),{
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
})(Count)
import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    state={
        hasError:''
    }
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }
    componentDidCatch(){
        console.log('777')
    }
    render() {
        return (
            <div>
                <h1>我是Parent</h1>
                {this.state.hasError?<h2>网络不稳定</h2>:<Child></Child>}
            </div>
        )
    }
}

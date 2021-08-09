import React, { Component } from 'react'
import './APP.css'
import Search from './components/Search'
import List from './components/List'
export default class APP extends Component {
    state={
        listData:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    upAppData=(obj)=>{
        this.setState(obj)
    }
    render() {
        return (
        <div className="container">
            <Search setData={this.upAppData}></Search>
            <List {...this.state}></List>
        </div>
        )
    }
}

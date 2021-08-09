import React, { Component } from 'react'
import Detaill from './Detaill'
import {Link,Route} from 'react-router-dom'
export default class Message extends Component {
    state={
        messageArr:[
            {id:1,title:'消息1'},
            {id:2,title:'消息2'},
            {id:3,title:'消息4'}
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((obj)=>{
                            return (
                                <li key={obj.id}>
                                    <Link to={`/home/message/detail/${obj.id}/${obj.title}`}>
                                        {obj.id} {obj.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail/:id/:title" component={Detaill}></Route>
            </div>
        )
    }
}
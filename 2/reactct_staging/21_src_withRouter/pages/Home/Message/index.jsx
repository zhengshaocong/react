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

    replaceShow=(id,title)=>{
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
        // this.props.history.replace({pathname:'/home/message/detail',state:{id:id,title:title}})
        this.props.history.replace('/home/message/detail',{id:id,title:title})
    }
    pushShow=(id,title)=>{
        // this.props.history.push(`/home/message/detail/${id}/${title}`) 
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
        this.props.history.push({pathname:'/home/message/detail',state:{id:id,title:title}})
    }
    
    back = ()=>{
        this.props.history.goBack()
    }

    forward=()=>{
        this.props.history.goForward()
    }

    
    go=()=>{
        this.props.history.go(2)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((obj)=>{
                            return (
                                // paramss
                                // <li key={obj.id}>
                                //     <Link to={`/home/message/detail/${obj.id}/${obj.title}`}>
                                //         {obj.id} {obj.title}
                                //     </Link>
                                //     <button onClick={()=>this.pushShow(obj.id,obj.title)}>push查看</button>
                                //     <button onClick={()=>this.replaceShow(obj.id,obj.title)}>replace查看</button>
                                // </li>
                                // <li key={obj.id}>
                                //     <Link to={`/home/message/detail/?id=${obj.id}&title=${obj.title}`}>
                                //         {obj.id} {obj.title}
                                //     </Link>
                                //     <button onClick={()=>this.pushShow(obj.id,obj.title)}>push查看</button>
                                //     <button onClick={()=>this.replaceShow(obj.id,obj.title)}>replace查看</button>
                                // </li>
                                <li key={obj.id}>
                                    <Link replace to={{pathname:'/home/message/detail',state:{id:obj.id,title:obj.title}}}>
                                        {obj.id} {obj.title}
                                    </Link>
                                    <button onClick={()=>this.pushShow(obj.id,obj.title)}>push查看</button>
                                    <button onClick={()=>this.replaceShow(obj.id,obj.title)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* <Route path="/home/message/detail/:id/:title" component={Detaill}></Route> */}
                <Route path="/home/message/detail" component={Detaill}></Route>
                {/* <Route path="/home/message/detail" component={Detaill}></Route> */}

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>自定义前进</button>
            </div>
        )
    }
}
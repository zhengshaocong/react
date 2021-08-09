import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Home组件内容</p>
                <div className="list-group">
                    <MyNavLink to='/home/news'>News</MyNavLink>
                    <MyNavLink to='/home/message'>Message</MyNavLink>
                </div>
                <Switch>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    <Redirect to="/home/news"></Redirect>
                </Switch>
            </div>
        )
    }
}

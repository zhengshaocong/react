import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './APP.css'
export default class APP extends Component {
    render() {
        return (
          <div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <Header></Header>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                  {/* <a className="list-group-item active" href="./about.html">About</a>
                  <a className="list-group-item" href="./home.html">Home</a> */}
                    <MyNavLink to="/about"><span>123132</span><span>123132</span></MyNavLink>
                    <MyNavLink to="/home"><p><span>14564656</span></p></MyNavLink>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                    {/* 注册路由    */}
                    <Route path='/about' component={About}></Route>
                    <Route path='/home' component={Home}></Route>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

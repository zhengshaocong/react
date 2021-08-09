/*
 * @Author: your name
 * @Date: 2021-03-01 20:29:24
 * @LastEditTime: 2021-03-18 18:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactct_staging\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import APP from './APP'
ReactDOM.render(
    <Router>
      <APP />
    </Router>
,document.getElementById('root'))
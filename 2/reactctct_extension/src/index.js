/*
 * @Author: your name
 * @Date: 2021-04-06 20:05:14
 * @LastEditTime: 2021-04-08 11:25:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactctct_extension\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>,
    document.getElementById('root')
)
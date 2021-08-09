/*
 * @Author: your name
 * @Date: 2021-04-01 16:26:05
 * @LastEditTime: 2021-04-01 17:55:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\store.js
 */
import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'//用于异步
export default createStore(countReducer,applyMiddleware(thunk))